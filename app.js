const DEFAULT_DATA = [
    { tag: "TC-330", level: 10, modelo: "Hidrojateamento ou succao", freq: "Seg, qua e sex", updated: "06/02/2026" },
    { tag: "TC-329", level: 8, modelo: "Hidrojateamento ou succao", freq: "Seg, qua e sex", updated: "06/02/2026" },
    { tag: "TC-331", level: 5, modelo: "Hidrojateamento + retirada manual", freq: "A cada 15 dias", updated: "06/02/2026" },
    { tag: "TC-334", level: 5, modelo: "Hidrojateamento + retirada manual", freq: "Seg, qua e sex", updated: "06/02/2026" },
    { tag: "TC-06", level: 10, modelo: "Hidrojateamento ou succao", freq: "Seg, qua e sex", updated: "06/02/2026" },
    { tag: "TC-05", level: 10, modelo: "Hidrojateamento ou succao", freq: "2 vezes por semana", updated: "06/02/2026" },
    { tag: "TC-01", level: 5, modelo: "Retirada manual", freq: "Diariamente", updated: "06/02/2026" },
    { tag: "TC-03", level: 5, modelo: "Retirada manual", freq: "Diariamente", updated: "06/02/2026" },
    { tag: "TC-04", level: 7, modelo: "Hidrojateamento + retirada manual", freq: "Diariamente", updated: "06/02/2026" },
    { tag: "TC-02", level: 10, modelo: "Hidrojateamento + retirada manual", freq: "Diariamente", updated: "06/02/2026" },
    { tag: "TR-02", level: 5, modelo: "Hidrojateamento + retirada manual", freq: "3 vezes por semana", updated: "06/02/2026" },
    { tag: "TR-04", level: 5, modelo: "Hidrojateamento + retirada manual", freq: "3 vezes por semana", updated: "06/02/2026" },
    { tag: "TR-46", level: 20, modelo: "Retirada manual ou succao", freq: "A cada 15 dias", updated: "06/02/2026" },
    { tag: "TR-45", level: 10, modelo: "Retirada manual", freq: "Esporadicamente", updated: "06/02/2026" },
    { tag: "TR-44", level: 5, modelo: "Retirada manual", freq: "Esporadicamente", updated: "06/02/2026" },
    { tag: "TR-40", level: 12, modelo: "Hidrojateamento + retirada manual", freq: "3 vezes por semana", updated: "06/02/2026" },
    { tag: "TR-39", level: 5, modelo: "Hidrojateamento + retirada manual", freq: "3 vezes por semana", updated: "06/02/2026" },
    { tag: "TC-328", level: 5, modelo: "Hidrojateamento", freq: "Semanalmente", updated: "06/02/2026" }
];
const HISTORICO_DADOS = {
    "TC-330": [ { data: "07/11/2025", nivel: 5 }, { data: "14/11/2025", nivel: 25 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 3 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 10 } ],
    "TC-329": [ { data: "07/11/2025", nivel: 25 }, { data: "14/11/2025", nivel: 10 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 8 }, { data: "06/02/2026", nivel: 8 } ],
    "TC-331": [ { data: "07/11/2025", nivel: 10 }, { data: "14/11/2025", nivel: 10 }, { data: "14/01/2026", nivel: 3 }, { data: "19/01/2026", nivel: 10 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 10 }, { data: "06/02/2026", nivel: 5 } ],
    "TC-334": [ { data: "07/11/2025", nivel: 0 }, { data: "14/11/2025", nivel: 45 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ],
    "TC-06":  [ { data: "07/11/2025", nivel: 5 }, { data: "14/11/2025", nivel: 25 }, { data: "14/01/2026", nivel: 10 }, { data: "19/01/2026", nivel: 7 }, { data: "26/01/2026", nivel: 20 }, { data: "02/02/2026", nivel: 15 }, { data: "06/02/2026", nivel: 10 } ],
    "TC-05":  [ { data: "07/11/2025", nivel: 30 }, { data: "14/11/2025", nivel: 15 }, { data: "14/01/2026", nivel: 3 }, { data: "19/01/2026", nivel: 10 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 8 }, { data: "06/02/2026", nivel: 10 } ],
    "TC-01":  [ { data: "07/11/2025", nivel: 2 }, { data: "14/11/2025", nivel: 3 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 15 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 12 }, { data: "06/02/2026", nivel: 5 } ],
    "TC-03":  [ { data: "07/11/2025", nivel: 2 }, { data: "14/11/2025", nivel: 4 }, { data: "14/01/2026", nivel: 7 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 10 }, { data: "06/02/2026", nivel: 5 } ],
    "TC-04":  [ { data: "07/11/2025", nivel: 10 }, { data: "14/11/2025", nivel: 20 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 7 }, { data: "02/02/2026", nivel: 7 }, { data: "06/02/2026", nivel: 7 } ],
    "TC-02":  [ { data: "07/11/2025", nivel: 15 }, { data: "14/11/2025", nivel: 15 }, { data: "14/01/2026", nivel: 10 }, { data: "19/01/2026", nivel: 10 }, { data: "26/01/2026", nivel: 25 }, { data: "02/02/2026", nivel: 10 }, { data: "06/02/2026", nivel: 10 } ],
    "TR-02":  [ { data: "07/11/2025", nivel: 3 }, { data: "14/11/2025", nivel: 3 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ],
    "TR-04":  [ { data: "07/11/2025", nivel: 0 }, { data: "14/11/2025", nivel: 0 }, { data: "14/01/2026", nivel: 7 }, { data: "19/01/2026", nivel: 7 }, { data: "26/01/2026", nivel: 7 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ],
    "TR-46":  [ { data: "07/11/2025", nivel: 2 }, { data: "14/11/2025", nivel: 2 }, { data: "14/01/2026", nivel: 10 }, { data: "19/01/2026", nivel: 10 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 25 }, { data: "06/02/2026", nivel: 20 } ],
    "TR-45":  [ { data: "07/11/2025", nivel: 6 }, { data: "14/11/2025", nivel: 6 }, { data: "14/01/2026", nivel: 10 }, { data: "19/01/2026", nivel: 10 }, { data: "26/01/2026", nivel: 10 }, { data: "02/02/2026", nivel: 10 }, { data: "06/02/2026", nivel: 10 } ],
    "TR-44":  [ { data: "07/11/2025", nivel: 5 }, { data: "14/11/2025", nivel: 5 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ],
    "TR-40":  [ { data: "07/11/2025", nivel: 10 }, { data: "14/11/2025", nivel: 16 }, { data: "14/01/2026", nivel: 15 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 30 }, { data: "02/02/2026", nivel: 10 }, { data: "06/02/2026", nivel: 12 } ],
    "TR-39":  [ { data: "07/11/2025", nivel: 10 }, { data: "14/11/2025", nivel: 20 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ],
    "TC-328": [ { data: "07/11/2025", nivel: 5 }, { data: "14/11/2025", nivel: 10 }, { data: "14/01/2026", nivel: 5 }, { data: "19/01/2026", nivel: 5 }, { data: "26/01/2026", nivel: 5 }, { data: "02/02/2026", nivel: 5 }, { data: "06/02/2026", nivel: 5 } ]
};
const COLORS = {
    clean: "#8fd65f",
    dust: "#efd45a",
    coal: "#d48f35",
    critical: "#dd4e42"
};

const SVG_NS = "http://www.w3.org/2000/svg";
const APP_CONFIG = (typeof window !== "undefined" && window.MAPA3D_CONFIG && typeof window.MAPA3D_CONFIG === "object")
    ? window.MAPA3D_CONFIG
    : {};
const API_BASE_URL = resolveApiBaseUrl();
const API_DATA_ENDPOINT = `${API_BASE_URL}/api/dados`;
const LOCAL_STORAGE_STATE_KEY = "mapa3d_estado_local_v1";
const MODAL_IMAGE_PLACEHOLDER = "data:image/svg+xml;charset=UTF-8,%3csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f1f5f9'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%2364748b'%3eClique para adicionar foto%3c/text%3e%3c/svg%3e";

function normalizeApiBaseUrl(rawValue) {
    const value = String(rawValue ?? "").trim();
    if (!value) {
        return "";
    }

    return value.replace(/\/+$/, "");
}

function resolveApiBaseUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const fromQuery = normalizeApiBaseUrl(params.get("api"));
        if (fromQuery) {
            return fromQuery;
        }
    } catch (error) {
        // Ignora problemas de leitura da URL em ambientes sem window.location.
    }

    return normalizeApiBaseUrl(APP_CONFIG.apiBaseUrl);
}

const dom = {
    chart: document.getElementById("chart3d"),
    chartWrap: document.getElementById("chartWrap"),
    tooltip: document.getElementById("tooltip"),
    inputTableBody: document.querySelector("#inputTable tbody"),
    applyBtn: document.getElementById("applyBtn"),
    statusMsg: document.getElementById("statusMsg"),
    avgLevel: document.getElementById("avgLevel"),
    cleanCount: document.getElementById("cleanCount"),
    criticalCount: document.getElementById("criticalCount"),
    lastUpdate: document.getElementById("lastUpdate"),
    // Modal Elements
    modal: document.getElementById("detailModal"),
    modalTitle: document.getElementById("modalTitle"),
    modalInfo: document.getElementById("modalInfo"),
    modalImg: document.getElementById("modalImg"),
    modalClose: document.getElementById("modalClose"),
    modalFileInput: document.getElementById("modalFileInput"),
    modalRemoveImg: document.getElementById("modalRemoveImg"),
    toggleObsLayer: document.getElementById("toggleObsLayer"),
    obsCount: document.getElementById("obsCount")
};

const state = {
    items: [],
    lastUpdate: new Date(),
    selectedTag: null,
    backendAvailable: false,
    showObsLayer: true,
    resizeRafId: null
};

const metaByTag = new Map(DEFAULT_DATA.map((item) => [item.tag, { modelo: item.modelo, freq: item.freq }]));
const TR1_TAG = "TR-01";
const TR4_BASE_TAG = "TR-04";

function cloneHistorico(historico) {
    if (!Array.isArray(historico)) {
        return [];
    }

    return historico.map((entry) => ({
        data: entry?.data || "",
        nivel: parsePercent(entry?.nivel) ?? 0
    }));
}

function normalizeAnomalias(anomalias) {
    if (!Array.isArray(anomalias)) {
        return [];
    }

    return anomalias
        .map((entry, index) => {
            const texto = String(entry?.texto ?? entry?.observacao ?? "").trim();
            if (!texto) {
                return null;
            }

            const id = String(entry?.id ?? `anomalia-${Date.now()}-${index}`).trim();
            const status = String(entry?.status ?? "aberta").trim().toLowerCase() === "resolvida"
                ? "resolvida"
                : "aberta";

            return {
                id,
                texto,
                data: String(entry?.data ?? formatDate(new Date())).trim() || formatDate(new Date()),
                status,
                foto: String(entry?.foto ?? entry?.imagem ?? "").trim() || null
            };
        })
        .filter(Boolean);
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function gerarIdAnomalia() {
    const random = Math.random().toString(36).slice(2, 8);
    return `anm-${Date.now()}-${random}`;
}

function sincronizarTr1ComTr4(items) {
    const deduped = dedupeByTag(Array.isArray(items) ? items : []);
    const base = deduped.find((item) => item.tag === TR4_BASE_TAG);
    if (!base) {
        return deduped;
    }

    const tr1Index = deduped.findIndex((item) => item.tag === TR1_TAG);
    const tr1Atual = tr1Index >= 0 ? deduped[tr1Index] : null;

    const tr1Sincronizada = {
        tag: TR1_TAG,
        level: base.level,
        modelo: `Acompanhamento automatico baseado em ${TR4_BASE_TAG}`,
        freq: `Sincronizada com ${TR4_BASE_TAG}`,
        updated: base.updated || formatDate(new Date()),
        imagem: tr1Atual?.imagem || base.imagem || null,
        historico: cloneHistorico(base.historico),
        anomalias: tr1Atual ? normalizeAnomalias(tr1Atual.anomalias) : normalizeAnomalias(base.anomalias),
        acompanhamentoBase: TR4_BASE_TAG
    };

    if (tr1Index >= 0) {
        deduped[tr1Index] = { ...tr1Atual, ...tr1Sincronizada };
    } else {
        deduped.push(tr1Sincronizada);
    }

    deduped.sort((a, b) => a.tag.localeCompare(b.tag, "pt-BR", { numeric: true }));
    return deduped;
}

async function init() {
    bindEvents();

    const backendState = await loadStateFromBackend();
    const localState = loadStateFromLocalStorage();
    let initialStatus = "Painel carregado. Ajuste os dados e clique em Aplicar dados.";
    let initialStatusType = "info";

    if (backendState) {
        state.backendAvailable = true;

        if (backendState.items.length > 0) {
            state.items = backendState.items;
            state.lastUpdate = backendState.lastUpdate;
            initialStatus = `Painel carregado com ${backendState.items.length} TAG(s) do backend.`;
        } else if (localState && localState.items.length > 0) {
            state.items = localState.items;
            state.lastUpdate = localState.lastUpdate;
            initialStatus = "Backend conectado. Sem dados remotos, restaurado do navegador.";
            void persistState();
        } else {
            state.items = DEFAULT_DATA.map((item) => ({
                ...item,
                historico: HISTORICO_DADOS[item.tag] ? [...HISTORICO_DADOS[item.tag]] : [],
                anomalias: []
            }));
            state.lastUpdate = new Date();
            initialStatus = "Backend conectado. Sem dados salvos, usando base padrao.";
            void persistState();
        }
    } else {
        state.backendAvailable = false;
        if (localState && localState.items.length > 0) {
            state.items = localState.items;
            state.lastUpdate = localState.lastUpdate;
        } else {
            state.items = DEFAULT_DATA.map((item) => ({
                ...item,
                historico: HISTORICO_DADOS[item.tag] ? [...HISTORICO_DADOS[item.tag]] : [],
                anomalias: []
            }));
            state.lastUpdate = new Date();
            saveStateToLocalStorage(buildStatePayload());
        }
        initialStatus = "Backend indisponivel. Modo local neste dispositivo (nao sincroniza entre celular e PC).";
        initialStatusType = "error";
    }

    state.items = sincronizarTr1ComTr4(state.items);
    if (dom.toggleObsLayer) {
        dom.toggleObsLayer.checked = state.showObsLayer;
    }
    renderInputTable();
    renderAll();
    setStatus(initialStatus, initialStatusType);
}

async function loadStateFromBackend() {
    try {
        const response = await fetch(API_DATA_ENDPOINT, {
            method: "GET",
            headers: { Accept: "application/json" },
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`GET ${API_DATA_ENDPOINT} retornou ${response.status}`);
        }

        const payload = await response.json();
        const rawItems = Array.isArray(payload.items) ? payload.items : [];

        return {
            items: normalizeIncomingItems(rawItems),
            lastUpdate: parseDateOrNow(payload.lastUpdate)
        };
    } catch (error) {
        console.warn("Falha ao carregar dados do backend:", error);
        return null;
    }
}

function buildStatePayload() {
    return {
        items: state.items.map((item) => ({
            tag: item.tag,
            level: item.level,
            modelo: item.modelo,
            freq: item.freq,
            updated: item.updated,
            imagem: item.imagem,
            historico: item.historico || [],
            anomalias: normalizeAnomalias(item.anomalias),
            acompanhamentoBase: item.acompanhamentoBase || null
        })),
        lastUpdate: state.lastUpdate.toISOString()
    };
}

function loadStateFromLocalStorage() {
    try {
        const raw = window.localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
        if (!raw) {
            return null;
        }

        const payload = JSON.parse(raw);
        const rawItems = Array.isArray(payload?.items) ? payload.items : [];

        return {
            items: normalizeIncomingItems(rawItems),
            lastUpdate: parseDateOrNow(payload?.lastUpdate)
        };
    } catch (error) {
        console.warn("Falha ao ler dados locais:", error);
        return null;
    }
}

function saveStateToLocalStorage(payload) {
    try {
        window.localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(payload));
        return true;
    } catch (error) {
        console.warn("Falha ao salvar dados locais:", error);
        return false;
    }
}

async function persistState() {
    state.items = sincronizarTr1ComTr4(state.items);
    registrarHistoricoAutomatico();

    const payload = buildStatePayload();
    saveStateToLocalStorage(payload);

    if (!state.backendAvailable) {
        return false;
    }

    try {
        const response = await fetch(API_DATA_ENDPOINT, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`PUT ${API_DATA_ENDPOINT} retornou ${response.status}`);
        }

        return true;
    } catch (error) {
        state.backendAvailable = false;
        console.warn("Falha ao salvar dados no backend:", error);
        setStatus("Dados salvos apenas neste dispositivo. Configure um backend para sincronizar com outros aparelhos.", "error");
        return false;
    }
}

function normalizeIncomingItems(items) {
    const next = [];

    items.forEach((row) => {
        if (!row) {
            return;
        }

        const tag = String(row.tag ?? "").trim().toUpperCase();
        const level = parsePercent(row.level ?? row.percentual);

        if (!tag || level === null) {
            return;
        }

        const fallbackMeta = resolveMeta(tag);
        const modelo = String(row.modelo ?? fallbackMeta.modelo).trim() || fallbackMeta.modelo;
        const freq = String(row.freq ?? fallbackMeta.freq).trim() || fallbackMeta.freq;
        const updated = String(row.updated ?? formatDate(new Date())).trim() || formatDate(new Date());
        const imagem = row.imagem || null; // Preserva a imagem se existir
        const anomalias = normalizeAnomalias(row.anomalias);
        const acompanhamentoBase = String(row.acompanhamentoBase ?? "").trim() || null;
        
        let historico = Array.isArray(row.historico) ? row.historico : [];
        if (historico.length === 0 && HISTORICO_DADOS[tag]) {
            historico = [...HISTORICO_DADOS[tag]];
        }

        next.push({ tag, level, modelo, freq, updated, imagem, historico, anomalias, acompanhamentoBase });
    });

    return sincronizarTr1ComTr4(next);
}

function parseDateOrNow(rawValue) {
    const parsed = new Date(rawValue);
    if (Number.isNaN(parsed.getTime())) {
        return new Date();
    }
    return parsed;
}

function bindEvents() {
    dom.applyBtn.addEventListener("click", applyInput);

    dom.chartWrap.addEventListener("mouseleave", hideTooltip);

    // Modal Events
    dom.modalClose.addEventListener("click", closeModal);
    dom.modal.addEventListener("click", (e) => {
        if (e.target === dom.modal) closeModal();
    });
    if (dom.modalFileInput) {
        dom.modalFileInput.addEventListener("change", handleImageUpload);
    }
    if (dom.modalRemoveImg) {
        dom.modalRemoveImg.addEventListener("click", removeMainImage);
    }
    if (dom.modalInfo) {
        dom.modalInfo.addEventListener("submit", handleModalInfoSubmit);
        dom.modalInfo.addEventListener("click", handleModalInfoClick);
        dom.modalInfo.addEventListener("change", handleModalInfoChange);
    }

    if (dom.toggleObsLayer) {
        dom.toggleObsLayer.checked = state.showObsLayer;
        dom.toggleObsLayer.addEventListener("change", () => {
            state.showObsLayer = dom.toggleObsLayer.checked;
            renderMapaEsquema();
            renderResumoAnomalias();
        });
    }

    window.addEventListener("resize", handleWindowResize, { passive: true });
}

function applyInput() {
    const parsed = readInputTable();
    if (!parsed.length) {
        setStatus("Nenhuma linha valida encontrada na tabela.", "error");
        return;
    }

    state.items = sincronizarTr1ComTr4(parsed);
    state.lastUpdate = new Date(); // Atualiza data geral do mapa
    state.selectedTag = null;
    renderAll();
    setStatus(`${state.items.length} TAG(s) atualizadas.`, "info");
    void persistState();
}

function renderAll() {
    renderChart();
    renderSummary();
    renderMapaEsquema();
    renderResumoAnomalias();
}

function renderSummary() {
    if (!state.items.length) {
        dom.avgLevel.textContent = "0%";
        dom.cleanCount.textContent = "0";
        dom.criticalCount.textContent = "0";
        dom.lastUpdate.textContent = "Ultima leitura: --";
        return;
    }

    const total = state.items.length;
    const sum = state.items.reduce((acc, item) => acc + item.level, 0);
    const average = sum / total;
    const clean = state.items.filter((item) => getLevelProfile(item.level).key === "clean").length;
    const critical = state.items.filter((item) => getLevelProfile(item.level).key === "critical").length;

    dom.avgLevel.textContent = formatPercent(average);
    dom.cleanCount.textContent = String(clean);
    dom.criticalCount.textContent = String(critical);
    dom.lastUpdate.textContent = `Ultima leitura: ${formatDate(state.lastUpdate)}`;
}

function renderChart() {
    const items = state.items;
    const svg = dom.chart;
    svg.textContent = "";

    if (!items.length) {
        return;
    }

    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const barWidth = isMobile ? 24 : 30;
    const barGap = isMobile ? 12 : 20;
    const depthX = isMobile ? 12 : 16;
    const depthY = isMobile ? 8 : 10;
    const maxValue = Math.max(30, ...items.map((item) => item.level));
    const width = Math.max(isMobile ? 620 : 980, items.length * (barWidth + barGap) + (isMobile ? 150 : 200));
    const height = isMobile ? 400 : 500;
    const baseY = height - (isMobile ? 72 : 88);
    const scale = (isMobile ? 190 : 250) / maxValue;

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");

    drawGrid(svg, width, baseY, maxValue, scale);
    drawFloor(svg, width, baseY, depthX, depthY);

    const barsGroup = createSvg("g", { class: "bars" });
    svg.appendChild(barsGroup);

    items.forEach((item, index) => {
        const profile = getLevelProfile(item.level);
        const x = 84 + index * (barWidth + barGap);
        const heightValue = Math.max(16, item.level * scale);
        const yTop = baseY - heightValue;
        const showTagLabel = !isMobile || items.length <= 10 || index % 2 === 0;
        const showValueLabel = !isMobile || items.length <= 14 || index % 2 === 0;

        const front = [
            [x, baseY],
            [x + barWidth, baseY],
            [x + barWidth, yTop],
            [x, yTop]
        ];
        const side = [
            [x + barWidth, baseY],
            [x + barWidth + depthX, baseY - depthY],
            [x + barWidth + depthX, yTop - depthY],
            [x + barWidth, yTop]
        ];
        const top = [
            [x, yTop],
            [x + barWidth, yTop],
            [x + barWidth + depthX, yTop - depthY],
            [x + depthX, yTop - depthY]
        ];
        const shadow = [
            [x, baseY],
            [x + barWidth, baseY],
            [x + barWidth + depthX, baseY - depthY],
            [x + depthX, baseY - depthY]
        ];

        const group = createSvg("g", {
            class: `bar${state.selectedTag === item.tag ? " selected" : ""}`,
            "data-tag": item.tag
        });
        group.style.cursor = "pointer";

        group.appendChild(createSvg("polygon", {
            points: pointsToString(shadow),
            fill: "rgba(15, 39, 63, 0.14)"
        }));
        group.appendChild(createSvg("polygon", {
            points: pointsToString(side),
            fill: shadeColor(profile.color, -24),
            stroke: "rgba(8, 25, 42, 0.34)",
            "stroke-width": "0.8"
        }));
        group.appendChild(createSvg("polygon", {
            points: pointsToString(top),
            fill: shadeColor(profile.color, 16),
            stroke: "rgba(8, 25, 42, 0.34)",
            "stroke-width": "0.8"
        }));
        group.appendChild(createSvg("polygon", {
            points: pointsToString(front),
            fill: profile.color,
            stroke: "rgba(8, 25, 42, 0.34)",
            "stroke-width": "0.8"
        }));

        if (showValueLabel) {
            group.appendChild(createSvg("text", {
                class: "value-text",
                x: String(x + (barWidth / 2) + (depthX * 0.35)),
                y: String(yTop - 10),
                "text-anchor": "middle"
            }, formatPercent(item.level)));
        }

        group.appendChild(createSvg("text", {
            class: "tag-text",
            x: String(x + (barWidth / 2)),
            y: String(baseY + 22),
            "text-anchor": "middle"
        }, showTagLabel ? item.tag : ""));

        group.addEventListener("mousemove", (event) => showTooltip(event, item, profile));
        group.addEventListener("mouseleave", hideTooltip);
        group.addEventListener("click", () => {
            state.selectedTag = item.tag;
            openModal(item);
            renderChart();
        });

        barsGroup.appendChild(group);
    });
}

function drawGrid(svg, width, baseY, maxValue, scale) {
    const steps = 5;
    for (let i = 0; i <= steps; i += 1) {
        const value = (maxValue / steps) * i;
        const y = baseY - (value * scale);
        svg.appendChild(createSvg("line", {
            class: "grid-line",
            x1: "64",
            y1: String(y),
            x2: String(width - 86),
            y2: String(y)
        }));
        svg.appendChild(createSvg("text", {
            class: "y-axis-label",
            x: "18",
            y: String(y + 4)
        }, `${Math.round(value)}%`));
    }
}

function drawFloor(svg, width, baseY, depthX, depthY) {
    const floor = [
        [64, baseY],
        [width - 86, baseY],
        [width - 70 + depthX, baseY - depthY],
        [64 + depthX, baseY - depthY]
    ];
    svg.appendChild(createSvg("polygon", {
        points: pointsToString(floor),
        fill: "rgba(11, 38, 62, 0.08)"
    }));
}

function showTooltip(event, item, profile) {
    const rect = dom.chartWrap.getBoundingClientRect();
    const left = clamp(event.clientX - rect.left + 12, 8, rect.width - 210);
    const top = clamp(event.clientY - rect.top - 10, 8, rect.height - 82);

    dom.tooltip.hidden = false;
    dom.tooltip.style.left = `${left}px`;
    dom.tooltip.style.top = `${top}px`;

    const content = [
        `<strong>${item.tag}</strong>`,
        `<div>${formatPercent(item.level)} - ${profile.label}</div>`,
        `<div>Frequencia: ${item.freq}</div>`,
        `<div>Modelo: ${item.modelo}</div>`
    ];

    if (item.imagem) {
        content.push(`<div style="margin-top:8px"><img src="${item.imagem}" alt="${item.tag}" style="max-width:100%; max-height:120px; border-radius:4px; object-fit:cover;"></div>`);
    }

    dom.tooltip.innerHTML = content.join("");
}

function hideTooltip() {
    dom.tooltip.hidden = true;
}

// --- Modal & Image Logic ---

function openModal(item) {
    if (!item) return;

    dom.modalTitle.textContent = item.tag;

    // Busca o histÃ³rico da TAG na nossa nova base de dados
    const historico = item.historico || [];
    let historicoHTML = "";
    let chartHTML = "";

    // Se tiver histÃ³rico, monta uma listagem estilizada
    if (historico.length > 0) {
        chartHTML = renderHistoryChart(historico);

        // Invertemos a ordem (reverse) para mostrar a data mais recente no topo
        const linhasHistorico = historico.slice().reverse().map(h => {
            // Destaca em vermelho se o nÃ­vel histÃ³rico foi muito alto (>= 20%)
            const corNivel = h.nivel >= 20 ? "#dd4e42" : "#64748b";
            return `
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #475569;">${h.data}</span>
                    <strong style="color: ${corNivel};">${h.nivel}%</strong>
                </div>
            `;
        }).join('');

        historicoHTML = `
            <div style="margin-top: 1rem;">
                <h4 style="margin: 0 0 8px 0; font-size: 0.9rem; color: #0f273f;">Historico de acumulo</h4>
                <div style="max-height: 120px; overflow-y: auto; background: #f8fafc; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 0.85rem;">
                    ${linhasHistorico}
                </div>
            </div>
        `;
    }

    // Injeta os dados atuais + historico e observacoes
    dom.modalInfo.innerHTML = `
        <div style="display: grid; gap: 0.5rem;">
            <div><strong>Nivel atual:</strong> ${formatPercent(item.level)}</div>
            <div><strong>Modelo:</strong> ${item.modelo || "Nao definido"}</div>
            <div><strong>Frequencia:</strong> ${item.freq || "Nao definida"}</div>
            <div><strong>Ultima atualizacao:</strong> ${item.updated}</div>
        </div>
        ${chartHTML}
        ${historicoHTML}
        ${renderAnomaliasPanel(item)}
    `;

    dom.modalImg.src = item.imagem ? item.imagem : MODAL_IMAGE_PLACEHOLDER;
    dom.modal.hidden = false;
}

function renderAnomaliasPanel(item) {
    const anomalias = normalizeAnomalias(item.anomalias);
    const abertas = anomalias.filter((anomalia) => anomalia.status !== "resolvida").length;
    const lista = anomalias.length
        ? anomalias.map((anomalia) => `
            <article class="anomaly-item ${anomalia.status === "resolvida" ? "resolved" : "open"}">
                <div class="anomaly-meta">
                    <strong>${escapeHtml(anomalia.data)}</strong>
                    <span>${anomalia.status === "resolvida" ? "Resolvida" : "Aberta"}</span>
                </div>
                <p>${escapeHtml(anomalia.texto)}</p>
                ${anomalia.foto ? `<img class="anomaly-photo" src="${anomalia.foto}" alt="Foto da anomalia de ${escapeHtml(item.tag)}">` : ""}
                <div class="anomaly-actions">
                    <button type="button" class="btn btn-ghost" data-action="toggle-anomalia" data-id="${escapeHtml(anomalia.id)}">
                        ${anomalia.status === "resolvida" ? "Reabrir" : "Marcar resolvida"}
                    </button>
                    ${anomalia.foto ? `<button type="button" class="btn btn-ghost" data-action="remove-anomalia-foto" data-id="${escapeHtml(anomalia.id)}">Remover foto</button>` : ""}
                    <button type="button" class="btn btn-ghost" data-action="remove-anomalia" data-id="${escapeHtml(anomalia.id)}">Remover</button>
                </div>
            </article>
        `).join("")
        : "<p class=\"anomaly-empty\">Sem anomalias registradas para esta correia.</p>";

    return `
        <section class="anomaly-panel">
            <div class="anomaly-panel-head">
                <h4>Camada de observacoes</h4>
                <span class="anomaly-open-count">${abertas} aberta(s)</span>
            </div>
            <form class="anomaly-form" data-anomalia-form>
                <textarea name="anomalia-texto" rows="3" maxlength="280" placeholder="Descreva a anomalia desta correia..."></textarea>
                <div class="anomaly-upload">
                    <span>Adicionar foto da observacao (opcional)</span>
                    <div class="anomaly-upload-actions">
                        <button type="button" class="btn btn-ghost" data-action="pick-anomalia-foto" data-source="camera">Abrir camera</button>
                        <button type="button" class="btn btn-ghost" data-action="pick-anomalia-foto" data-source="arquivo">Escolher foto</button>
                        <button type="button" class="btn btn-ghost" data-action="clear-anomalia-foto">Remover foto selecionada</button>
                    </div>
                    <input type="file" name="anomalia-foto-camera" accept="image/*" capture="environment" class="anomaly-file-input" hidden>
                    <input type="file" name="anomalia-foto-arquivo" accept="image/*" class="anomaly-file-input" hidden>
                    <small class="anomaly-selected-file" data-selected-foto>Nenhuma foto selecionada.</small>
                </div>
                <small class="anomaly-upload-hint">A imagem e comprimida automaticamente antes de salvar.</small>
                <button type="submit" class="btn btn-primary">Adicionar anomalia</button>
            </form>
            <div class="anomaly-list">${lista}</div>
        </section>
    `;
}

function renderHistoryChart(history) {
    if (!history || history.length < 2) return "";

    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const pointWidth = 60;
    const minWidth = isMobile ? 360 : 550;
    const width = Math.max(minWidth, history.length * pointWidth);
    const height = isMobile ? 130 : 150;
    const padding = 20;
    const bottomMargin = 30;

    const points = history.map((h, i) => {
        const x = padding + (i / (history.length - 1)) * (width - 2 * padding);
        const drawHeight = height - padding - bottomMargin;
        const y = height - bottomMargin - (h.nivel / 100) * drawHeight;
        return `${x},${y}`;
    }).join(" ");

    const elements = history.map((h, i) => {
        const x = padding + (i / (history.length - 1)) * (width - 2 * padding);
        const drawHeight = height - padding - bottomMargin;
        const y = height - bottomMargin - (h.nivel / 100) * drawHeight;
        
        const dateParts = h.data.split("/");
        const shortDate = dateParts.length >= 2 ? `${dateParts[0]}/${dateParts[1]}` : h.data;

        return `
            <g>
                <circle cx="${x}" cy="${y}" r="4" fill="#245f93">
                    <title>${h.data}: ${h.nivel}%</title>
                </circle>
                <text x="${x}" y="${y - 10}" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#333" font-weight="bold">${h.nivel}%</text>
                <text x="${x}" y="${height - 8}" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#555">${shortDate}</text>
            </g>
        `;
    }).join("");

    return `
        <div style="margin-top: 1rem; overflow-x: auto; white-space: nowrap; padding-bottom: 10px;">
            <h4 style="margin: 0 0 4px 0; font-size: 0.9rem; color: #0f273f; position: sticky; left: 0;">Grafico de evolucao</h4>
            <svg width="${width}" height="${height}" style="background: #f8fafc; border-radius: 6px; border: 1px solid #cbd5e1; min-width: 100%;">
                <polyline points="${points}" fill="none" stroke="#245f93" stroke-width="2" />
                ${elements}
            </svg>
        </div>
    `;
}

function getItemByTag(tag) {
    return state.items.find((item) => item.tag === tag) || null;
}

function atualizarAnomaliasNoModal(tag) {
    if (dom.modal.hidden || state.selectedTag !== tag) {
        return;
    }

    const atual = getItemByTag(tag);
    if (atual) {
        openModal(atual);
    }
}

async function handleModalInfoSubmit(event) {
    const form = event.target.closest("[data-anomalia-form]");
    if (!form || !state.selectedTag) {
        return;
    }

    event.preventDefault();
    const field = form.querySelector("textarea[name='anomalia-texto']");
    const fotoCameraInput = form.querySelector("input[name='anomalia-foto-camera']");
    const fotoArquivoInput = form.querySelector("input[name='anomalia-foto-arquivo']");
    const texto = field ? field.value : "";

    try {
        let fotoBase64 = null;
        const fileCamera = fotoCameraInput?.files?.[0] || null;
        const fileArquivo = fotoArquivoInput?.files?.[0] || null;
        const file = fileCamera || fileArquivo;

        if (file) {
            fotoBase64 = await compressImage(file, { maxWidth: 1200, quality: 0.8 });
        }

        const adicionou = adicionarAnomalia(state.selectedTag, texto, fotoBase64);
        if (adicionou && field) {
            field.value = "";
        }
        if (adicionou && fotoCameraInput) {
            fotoCameraInput.value = "";
        }
        if (adicionou && fotoArquivoInput) {
            fotoArquivoInput.value = "";
        }
        if (adicionou) {
            updateAnomaliaSelectedFile(form);
        }
    } catch (error) {
        console.error(error);
        setStatus("Erro ao processar a foto da anomalia.", "error");
    }
}

function handleModalInfoClick(event) {
    const button = event.target.closest("[data-action]");
    if (!button || !state.selectedTag) {
        return;
    }

    const action = button.getAttribute("data-action");

    if (action === "pick-anomalia-foto") {
        abrirSeletorFotoAnomalia(button);
        return;
    }

    if (action === "clear-anomalia-foto") {
        const form = button.closest("[data-anomalia-form]");
        clearAnomaliaSelectedFile(form);
        return;
    }

    const id = button.getAttribute("data-id");
    if (!id) {
        return;
    }

    if (action === "toggle-anomalia") {
        alternarStatusAnomalia(state.selectedTag, id);
        return;
    }

    if (action === "remove-anomalia") {
        removerAnomalia(state.selectedTag, id);
        return;
    }

    if (action === "remove-anomalia-foto") {
        removerFotoAnomalia(state.selectedTag, id);
    }
}

function handleModalInfoChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
        return;
    }

    const name = target.name;
    if (name !== "anomalia-foto-camera" && name !== "anomalia-foto-arquivo") {
        return;
    }

    const form = target.closest("[data-anomalia-form]");
    if (!form) {
        return;
    }

    // Mantem somente a selecao mais recente entre camera e arquivo.
    if (target.files && target.files.length > 0) {
        const otherName = name === "anomalia-foto-camera" ? "anomalia-foto-arquivo" : "anomalia-foto-camera";
        const otherInput = form.querySelector(`input[name='${otherName}']`);
        if (otherInput) {
            otherInput.value = "";
        }
    }

    updateAnomaliaSelectedFile(form);
}

function abrirSeletorFotoAnomalia(button) {
    const form = button.closest("[data-anomalia-form]");
    if (!form) {
        return;
    }

    const source = button.getAttribute("data-source");
    const inputName = source === "camera" ? "anomalia-foto-camera" : "anomalia-foto-arquivo";
    const input = form.querySelector(`input[name='${inputName}']`);
    if (input) {
        input.click();
    }
}

function clearAnomaliaSelectedFile(form) {
    if (!form) {
        return;
    }

    const cameraInput = form.querySelector("input[name='anomalia-foto-camera']");
    const arquivoInput = form.querySelector("input[name='anomalia-foto-arquivo']");
    if (cameraInput) {
        cameraInput.value = "";
    }
    if (arquivoInput) {
        arquivoInput.value = "";
    }

    updateAnomaliaSelectedFile(form);
}

function updateAnomaliaSelectedFile(form) {
    if (!form) {
        return;
    }

    const cameraInput = form.querySelector("input[name='anomalia-foto-camera']");
    const arquivoInput = form.querySelector("input[name='anomalia-foto-arquivo']");
    const label = form.querySelector("[data-selected-foto]");
    if (!label) {
        return;
    }

    const file = cameraInput?.files?.[0] || arquivoInput?.files?.[0] || null;
    label.textContent = file ? `Foto selecionada: ${file.name}` : "Nenhuma foto selecionada.";
}

function adicionarAnomalia(tag, texto, fotoBase64 = null) {
    const conteudo = String(texto ?? "").trim();
    if (!conteudo) {
        setStatus("Digite uma observacao para registrar a anomalia.", "error");
        return false;
    }

    const item = getItemByTag(tag);
    if (!item) {
        setStatus("Nao foi possivel localizar a correia para registrar anomalia.", "error");
        return false;
    }

    item.anomalias = normalizeAnomalias(item.anomalias);
    item.anomalias.unshift({
        id: gerarIdAnomalia(),
        texto: conteudo,
        data: formatDate(new Date()),
        status: "aberta",
        foto: fotoBase64 || null
    });

    item.updated = formatDate(new Date());
    state.lastUpdate = new Date();
    renderAll();
    atualizarAnomaliasNoModal(tag);
    setStatus(`Anomalia registrada em ${tag}.`, "info");
    void persistState();
    return true;
}

function alternarStatusAnomalia(tag, id) {
    const item = getItemByTag(tag);
    if (!item) {
        return false;
    }

    item.anomalias = normalizeAnomalias(item.anomalias);
    const alvo = item.anomalias.find((anomalia) => anomalia.id === id);
    if (!alvo) {
        return false;
    }

    alvo.status = alvo.status === "resolvida" ? "aberta" : "resolvida";
    item.updated = formatDate(new Date());
    state.lastUpdate = new Date();
    renderAll();
    atualizarAnomaliasNoModal(tag);
    setStatus(`Anomalia de ${tag} marcada como ${alvo.status}.`, "info");
    void persistState();
    return true;
}

function removerAnomalia(tag, id) {
    const item = getItemByTag(tag);
    if (!item) {
        return false;
    }

    const antes = normalizeAnomalias(item.anomalias);
    const depois = antes.filter((anomalia) => anomalia.id !== id);
    if (antes.length === depois.length) {
        return false;
    }

    item.anomalias = depois;
    item.updated = formatDate(new Date());
    state.lastUpdate = new Date();
    renderAll();
    atualizarAnomaliasNoModal(tag);
    setStatus(`Anomalia removida de ${tag}.`, "info");
    void persistState();
    return true;
}

function removerFotoAnomalia(tag, id) {
    const item = getItemByTag(tag);
    if (!item) {
        return false;
    }

    item.anomalias = normalizeAnomalias(item.anomalias);
    const alvo = item.anomalias.find((anomalia) => anomalia.id === id);
    if (!alvo || !alvo.foto) {
        return false;
    }

    alvo.foto = null;
    item.updated = formatDate(new Date());
    state.lastUpdate = new Date();
    renderAll();
    atualizarAnomaliasNoModal(tag);
    setStatus(`Foto removida da anomalia de ${tag}.`, "info");
    void persistState();
    return true;
}

function contarAnomaliasAbertas() {
    return state.items.reduce((total, item) => {
        const abertas = normalizeAnomalias(item.anomalias)
            .filter((anomalia) => anomalia.status !== "resolvida")
            .length;
        return total + abertas;
    }, 0);
}

function renderResumoAnomalias() {
    if (!dom.obsCount) {
        return;
    }

    const abertas = contarAnomaliasAbertas();
    const layerState = state.showObsLayer ? "camada ativa" : "camada oculta";
    dom.obsCount.textContent = `${abertas} anomalias abertas - ${layerState}`;
}

function closeModal() {
    dom.modal.hidden = true;
    state.selectedTag = null;
    renderChart(); // Remove o destaque visual
}

function handleWindowResize() {
    if (state.resizeRafId) {
        cancelAnimationFrame(state.resizeRafId);
    }

    state.resizeRafId = requestAnimationFrame(() => {
        state.resizeRafId = null;
        renderAll();
    });
}

async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file || !state.selectedTag) return;

    try {
        const base64 = await compressImage(file);
        
        // Atualiza o estado
        const itemIndex = state.items.findIndex(i => i.tag === state.selectedTag);
        if (itemIndex !== -1) {
            state.items[itemIndex].imagem = base64;
            state.items[itemIndex].updated = formatDate(new Date());
            
            // Atualiza UI
            dom.modalImg.src = base64;
            renderAll();
            setStatus(`Imagem salva para ${state.selectedTag}`, "info");
            
            // Salva no backend
            void persistState();
        }
    } catch (error) {
        console.error(error);
        setStatus("Erro ao processar imagem.", "error");
    } finally {
        event.target.value = ""; // Reset input
    }
}

function removeMainImage() {
    if (!state.selectedTag) {
        return;
    }

    const item = getItemByTag(state.selectedTag);
    if (!item || !item.imagem) {
        return;
    }

    item.imagem = null;
    item.updated = formatDate(new Date());
    state.lastUpdate = new Date();
    dom.modalImg.src = MODAL_IMAGE_PLACEHOLDER;
    renderAll();
    setStatus(`Foto do local removida para ${state.selectedTag}.`, "info");
    void persistState();
}

function compressImage(file, options = {}) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxWidth = Number.isFinite(options.maxWidth) ? options.maxWidth : 800;
                const quality = Number.isFinite(options.quality) ? options.quality : 0.8;
                const scale = maxWidth / img.width;
                const width = scale < 1 ? maxWidth : img.width;
                const height = scale < 1 ? img.height * scale : img.height;

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                resolve(canvas.toDataURL("image/jpeg", quality));
            };
            img.onerror = reject;
        };
        reader.onerror = reject;
    });
}

function readInputTable() {
    const rows = Array.from(dom.inputTableBody.querySelectorAll("tr"));
    const byTag = new Map();

    rows.forEach((row) => {
        const tagInput = row.querySelector(".input-tag");
        const levelInput = row.querySelector(".input-level");
        const dateInput = row.querySelector(".input-date");

        if (!tagInput || !levelInput) return;

        const tag = tagInput.value.trim().toUpperCase();
        const level = parsePercent(levelInput.value);
        
        if (!tag || level === null) {
            return;
        }

        // Se o usuÃ¡rio editou a data manualmente, usamos ela. 
        // Se estiver vazia, usamos "agora".
        const updated = dateInput && dateInput.value.trim() ? dateInput.value.trim() : formatDate(new Date());

        const existingItem = state.items.find((i) => i.tag === tag);

        byTag.set(tag, {
            tag,
            level,
            ...resolveMeta(tag),
            updated: updated,
            imagem: existingItem ? existingItem.imagem : null,
            historico: existingItem ? cloneHistorico(existingItem.historico) : (HISTORICO_DADOS[tag] ? [...HISTORICO_DADOS[tag]] : []),
            anomalias: existingItem ? normalizeAnomalias(existingItem.anomalias) : [],
            acompanhamentoBase: existingItem?.acompanhamentoBase || null
        });
    });

    return Array.from(byTag.values());
}

function parsePercent(rawValue) {
    if (rawValue === null || rawValue === undefined) {
        return null;
    }

    const normalized = String(rawValue)
        .trim()
        .replace("%", "")
        .replace(/\s+/g, "")
        .replace(",", ".");

    const value = Number.parseFloat(normalized);
    if (!Number.isFinite(value)) {
        return null;
    }

    return clamp(Math.round(value), 0, 100);
}

function registrarHistoricoAutomatico() {
    const hoje = new Date().toLocaleDateString("pt-BR");

    state.items.forEach((item) => {
        // Se nÃ£o tiver histÃ³rico, tenta pegar do estÃ¡tico ou inicia vazio
        if (!item.historico) {
            item.historico = HISTORICO_DADOS[item.tag] ? [...HISTORICO_DADOS[item.tag]] : [];
        }

        const ultimo = item.historico[item.historico.length - 1];

        if (!ultimo || ultimo.data !== hoje) {
            item.historico.push({ data: hoje, nivel: item.level });
        } else {
            ultimo.nivel = item.level;
        }
    });
}

function renderInputTable() {
    dom.inputTableBody.innerHTML = "";
    
    // Ordena por TAG para facilitar leitura
    const sortedItems = [...state.items].sort((a, b) => a.tag.localeCompare(b.tag, undefined, { numeric: true }));

    sortedItems.forEach(item => {
        addInputRow(item);
    });
}

function addInputRow(item = null) {
    const tr = document.createElement("tr");
    const isTr1Acompanhamento = item?.tag === TR1_TAG && item?.acompanhamentoBase === TR4_BASE_TAG;
    
    const tagValue = item ? item.tag : "";
    const levelValue = item ? Math.round(item.level) : "";
    const dateValue = item ? item.updated : formatDate(new Date());

    tr.innerHTML = `
        <td>
            <input type="text" class="input-tag" value="${tagValue}" placeholder="TAG" ${item ? 'readonly' : ''} style="${item ? 'font-weight:bold; color:#30475f' : ''}">
        </td>
        <td>
            <input type="number" class="input-level" value="${levelValue}" min="0" max="100" step="1" ${isTr1Acompanhamento ? 'readonly title="Sincronizado automaticamente com TR-04"' : ''} style="${isTr1Acompanhamento ? 'background:#eef4fb; font-weight:700; color:#1f4f79;' : ''}">
        </td>
        <td>
            <input type="text" class="input-date" value="${dateValue}" placeholder="dd/mm/aaaa HH:mm" ${isTr1Acompanhamento ? 'readonly title="Data sincronizada com TR-04"' : ''} style="${isTr1Acompanhamento ? 'background:#eef4fb; color:#1f4f79;' : ''}">
        </td>
    `;

    dom.inputTableBody.appendChild(tr);
}

function formatInputNumber(value) {
    if (Number.isInteger(value)) {
        return String(value);
    }
    return value.toFixed(1).replace(".", ",");
}

function resolveMeta(tag) {
    const meta = metaByTag.get(tag);
    if (!meta) {
        return {
            modelo: "Modelo de limpeza a definir",
            freq: "Frequencia a definir"
        };
    }
    return { ...meta };
}

function getLevelProfile(level) {
    if (level <= 8) {
        return { key: "clean", label: "Limpo", color: COLORS.clean };
    }
    if (level <= 15) {
        return { key: "dust", label: "Medio acumulo de po", color: COLORS.dust };
    }
    if (level <= 25) {
        return { key: "coal", label: "Medio acumulo de carvao", color: COLORS.coal };
    }
    return { key: "critical", label: "Acumulo critico", color: COLORS.critical };
}

function createSvg(tag, attributes = {}, text = "") {
    const node = document.createElementNS(SVG_NS, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) {
        node.textContent = text;
    }
    return node;
}

function pointsToString(points) {
    return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function shadeColor(hex, amount) {
    const cleaned = hex.replace("#", "");
    const value = Number.parseInt(cleaned, 16);
    const red = clamp(((value >> 16) & 0xff) + amount, 0, 255);
    const green = clamp(((value >> 8) & 0xff) + amount, 0, 255);
    const blue = clamp((value & 0xff) + amount, 0, 255);
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

function toHex(value) {
    return Math.round(value).toString(16).padStart(2, "0");
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function formatDate(date) {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
}

function formatPercent(value, forceDecimal = false) {
    const numberText = forceDecimal || !Number.isInteger(value)
        ? value.toFixed(1)
        : String(value);
    return `${numberText.replace(".", ",")}%`;
}

function setStatus(message, type) {
    dom.statusMsg.textContent = message;
    dom.statusMsg.className = `status ${type || "info"}`;
}

function dedupeByTag(items) {
    const map = new Map();
    items.forEach((item) => map.set(item.tag, item));
    return Array.from(map.values());
}

function atualizarNivel(tag, percentual) {
    const parsedTag = String(tag || "").trim().toUpperCase();
    const parsedLevel = parsePercent(percentual);

    if (!parsedTag || parsedLevel === null) {
        setStatus("Falha ao atualizar TAG: informe TAG e percentual valido.", "error");
        return false;
    }

    if (parsedTag === TR1_TAG) {
        setStatus("A TR-01 e automatica e acompanha a TR-04. Atualize a TR-04 para refletir na TR-01.", "error");
        return false;
    }

    const index = state.items.findIndex((item) => item.tag === parsedTag);
    const payload = {
        tag: parsedTag,
        level: parsedLevel,
        ...resolveMeta(parsedTag),
        updated: formatDate(new Date()),
        imagem: state.items[index]?.imagem || null, // MantÃ©m imagem existente se houver
        historico: state.items[index]?.historico || [],
        anomalias: normalizeAnomalias(state.items[index]?.anomalias),
        acompanhamentoBase: state.items[index]?.acompanhamentoBase || null
    };

    if (index >= 0) {
        state.items[index] = { ...state.items[index], ...payload };
    } else {
        state.items.push(payload);
        state.items.sort((a, b) => a.tag.localeCompare(b.tag, "pt-BR", { numeric: true }));
    }

    state.items = sincronizarTr1ComTr4(state.items);
    state.lastUpdate = new Date();
    renderInputTable();
    renderAll();
    setStatus(`TAG ${parsedTag} atualizada para ${formatPercent(parsedLevel)}.`, "info");
    void persistState();
    return true;
}

function montarMapa3D(dados) {
    if (!Array.isArray(dados)) {
        setStatus("Use montarMapa3D com um array de objetos.", "error");
        return false;
    }

    const next = [];

    dados.forEach((row) => {
        if (!row) {
            return;
        }

        const tag = String(row.tag ?? row.TAG ?? "").trim().toUpperCase();
        const level = parsePercent(row.percentual ?? row.level ?? row.acumulo ?? row.acumulo_atual);

        if (!tag || level === null) {
            return;
        }

        const existente = state.items.find((item) => item.tag === tag);

        next.push({
            tag,
            level,
            ...resolveMeta(tag),
            updated: formatDate(new Date()),
            imagem: existente?.imagem || null,
            historico: existente ? cloneHistorico(existente.historico) : (HISTORICO_DADOS[tag] ? [...HISTORICO_DADOS[tag]] : []),
            anomalias: existente ? normalizeAnomalias(existente.anomalias) : [],
            acompanhamentoBase: existente?.acompanhamentoBase || null
        });
    });

    if (!next.length) {
        setStatus("Nenhum item valido recebido em montarMapa3D.", "error");
        return false;
    }

    state.items = sincronizarTr1ComTr4(next);
    state.lastUpdate = new Date();
    state.selectedTag = null;
    renderInputTable();
    renderAll();
    setStatus(`Mapa atualizado com ${state.items.length} TAG(s).`, "info");
    void persistState();
    return true;
}

window.atualizarNivel = atualizarNivel;
window.montarMapa3D = montarMapa3D;

function renderMapaEsquema() {
    const container = document.getElementById("mapaEsquemaContainer");
    if (!container) return;
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const mapViewBox = "0 0 1400 550";
    const mapWidth = isMobile ? "1600" : "100%";

    // ViewBox ajustado para 1400 para caber o seu layout completo de DivinÃ³polis
    const svg = createSvg("svg", { 
        viewBox: mapViewBox,
        width: mapWidth,
        style: "background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px;"
    });

    const coordenadasJSON = [
        { "tag": "TC-330", "x": 94, "y": 139, "w": 120, "h": 14 },
        { "tag": "MESA 2", "x": 31, "y": 106, "w": 77, "h": 115, isArea: true },
        { "tag": "TC-329", "x": 91, "y": 170, "w": 417, "h": 9 },
        { "tag": "TC-331", "x": 212, "y": 138, "w": 290, "h": 18 },
        { "tag": "TC-326", "x": 246, "y": 148.125, "w": 17, "h": 188 },
        { "tag": "TC-325", "x": 324, "y": 145.125, "w": 14, "h": 190 },
        { "tag": "TC-324", "x": 401, "y": 147.125, "w": 15, "h": 205 },
        { "tag": "AF3",    "x": 232, "y": 299, "w": 186, "h": 77, isArea: true },
        { "tag": "TC-328", "x": 493, "y": 170, "w": 16, "h": 384 },
        { "tag": "TC-334", "x": 507, "y": 144, "w": 49, "h": 19 },
        { "tag": "TR-40",  "x": 555, "y": 160, "w": 11, "h": 212 },
        { "tag": "TR-44",  "x": 535, "y": 256, "w": 11, "h": 156 },
        { "tag": "TR-45",  "x": 692, "y": 265, "w": -161, "h": 9 }, // <--- Auto-corrigido aqui
        { "tag": "TR-39",  "x": 658, "y": 161, "w": 13, "h": 213 },
        { "tag": "AF2",    "x": 682, "y": 325, "w": -132, "h": 73, isArea: true }, // <--- Auto-corrigido aqui
        { "tag": "TC-06",  "x": 710, "y": 163, "w": -155, "h": 12 }, // <--- Auto-corrigido aqui
        { "tag": "TC-05",  "x": 712, "y": 149, "w": 155, "h": 15 },
        { "tag": "TR-46",  "x": 695, "y": 268, "w": 215, "h": 12 },
        { "tag": "TR-04",  "x": 916, "y": 280, "w": 168, "h": -11 }, // <--- Auto-corrigido aqui
        { "tag": "TC-02",  "x": 1000, "y": 82, "w": 15, "h": 229 },
        { "tag": "TR-01",  "x": 912, "y": 300, "w": 265, "h": 16 },
        { "tag": "TC-04",  "x": 1027, "y": 47, "w": 15, "h": 228 },
        { "tag": "TC-01",  "x": 871, "y": 149, "w": 141, "h": 17 },
        { "tag": "TC-03",  "x": 883, "y": 122, "w": 160, "h": 15 },
        { "tag": "MESA 1", "x": 829, "y": 34, "w": 100, "h": 159, isArea: true },
        { "tag": "TR-02",  "x": 1159, "y": 261, "w": 18, "h": 93 },
        { "tag": "TR-03",  "x": 1080, "y": 340.125, "w": 171, "h": 12 },
        { "tag": "AF-1",   "x": 1035, "y": 340, "w": 223, "h": 92, isArea: true }
    ];

    coordenadasJSON.forEach(d => {
        // LÃ“GICA DE CORREÃ‡ÃƒO:
        // Se a largura for negativa, o X real Ã© o X inicial + a largura negativa
        const realX = d.w < 0 ? d.x + d.w : d.x;
        const realY = d.h < 0 ? d.y + d.h : d.y;
        const realW = Math.abs(d.w);
        const realH = Math.abs(d.h);

        const tagRef = d.tag.toUpperCase().replace(/\s+/g, "-");
        const item = state.items.find((i) => i.tag === tagRef);
        const anomaliasAbertas = item
            ? normalizeAnomalias(item.anomalias).filter((anomalia) => anomalia.status !== "resolvida").length
            : 0;
        const color = d.isArea ? "#f1f5f9" : (item ? getLevelProfile(item.level).color : "#cbd5e1");
        const rectClass = d.isArea
            ? "mapa-area"
            : `rota-item${anomaliasAbertas > 0 ? " has-anomaly" : ""}`;
        
        const rect = createSvg("rect", {
            x: realX, y: realY, width: realW, height: realH,
            fill: color, 
            class: rectClass,
            "data-tag": tagRef
        });

        if (!d.isArea && item) {
            rect.onclick = () => {
                state.selectedTag = tagRef;
                const itemAtual = getItemByTag(tagRef);
                if (itemAtual) {
                    openModal(itemAtual);
                }
                renderAll();
            };
        }

        svg.appendChild(rect);
        svg.appendChild(createSvg("text", {
            x: realX + (realW / 2), y: realY + (realH / 2) + 4,
            "text-anchor": "middle", class: "mapa-label", style: "font-size: 8px; fill: #1e293b;"
        }, d.tag));

        if (!d.isArea && item && state.showObsLayer && anomaliasAbertas > 0) {
            svg.appendChild(createSvg("circle", {
                cx: String(realX + realW - 2),
                cy: String(realY + 2),
                r: "8",
                class: "obs-marker-dot"
            }));
            svg.appendChild(createSvg("text", {
                x: String(realX + realW - 2),
                y: String(realY + 5),
                "text-anchor": "middle",
                class: "obs-marker-text"
            }, String(anomaliasAbertas)));
        }
    });

    container.innerHTML = "";
    container.appendChild(svg);
}

function bootstrap() {
    void init().catch((error) => {
        console.error("Falha ao inicializar o projeto:", error);
        setStatus("Erro ao inicializar a aplicacao.", "error");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
    bootstrap();
}
