const http = require("http");
const fs   = require("fs");
const path = require("path");

const HOST      = process.env.HOST || "0.0.0.0";
const PORT      = Number(process.env.PORT) || 10000;
const DATA_FILE = path.join(__dirname, "dados_persistidos.json");

function setCors(req, res) {
    const origin = req.headers.origin || "*";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Vary", "Origin");
}

function lerDados() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        }
    } catch (e) { console.error("[lerDados]", e.message); }
    return { items: [], ultimaAtualizacao: null };
}

function salvarDados(dados) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(dados, null, 2), "utf8");
        return true;
    } catch (e) { console.error("[salvarDados]", e.message); return false; }
}

function json(res, status, data) {
    const body = JSON.stringify(data);
    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body),
        "Cache-Control": "no-store"
    });
    res.end(body);
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            try { resolve(JSON.parse(body || "{}")); }
            catch (e) { reject(new Error("JSON invalido")); }
        });
        req.on("error", reject);
    });
}

async function router(req, res) {
    setCors(req, res);

    if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

    const url      = new URL(req.url, `http://${req.headers.host}`);
    const method   = req.method.toUpperCase();
    const pathname = url.pathname.replace(/\/$/, "") || "/";

    console.log(`[${new Date().toISOString()}] ${method} ${pathname}`);

    if (method === "GET" && pathname === "/api/health") {
        const d = lerDados();
        return json(res, 200, { ok: true, itens: (d.items||[]).length });
    }

    if (method === "GET" && pathname === "/api/dados") {
        return json(res, 200, lerDados());
    }

    if ((method === "POST" || method === "PUT") && pathname === "/api/dados") {
        let body;
        try { body = await readBody(req); }
        catch (e) { return json(res, 400, { erro: e.message }); }

        if (!body || !Array.isArray(body.items)) {
            return json(res, 400, { erro: "Corpo deve ter { items: [...] }" });
        }

        const dados = {
            items: body.items,
            anomalias: body.anomalias || {},
            ultimaAtualizacao: new Date().toISOString()
        };

        if (!salvarDados(dados)) return json(res, 500, { erro: "Falha ao salvar" });

        console.log(`  -> Salvos ${dados.items.length} itens`);
        return json(res, 200, { ok: true, itens: dados.items.length });
    }

    return json(res, 404, { erro: "Rota nao encontrada" });
}

http.createServer(router).listen(PORT, HOST, () => {
    console.log(`\nServidor rodando em http://${HOST}:${PORT}`);
    console.log(`Health: http://${HOST}:${PORT}/api/health`);
    console.log(`Dados:  http://${HOST}:${PORT}/api/dados\n`);
});
