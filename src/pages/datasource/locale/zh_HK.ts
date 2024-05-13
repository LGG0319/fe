const zh_HK = {
  title: '數據源管理',
  list_title: '已接入的數據源',
  name: '數據源名稱',
  id: '數據源 ID',
  description: '備註',
  type: '數據源類型',
  enable: '啟用',
  disable: '停用',
  confirm: {
    enable: '確定啟用該數據源嗎？',
    disable: '確定禁用該數據源嗎？',
  },
  success: {
    enable: '啟用成功',
    disable: '禁用成功',
  },
  add_title: '創建數據源',
  edit_title: '修改數據源',
  rename_title: '修改數據源名稱',
  type_btn_add: '新增',
  default: '設置為默認數據源',
  default_msg: '該數據源類型下的默認集群，網絡探測功能採集的時序數據，會上報到此數據源中',
  default_tip: '網絡探測功能採集的時序數據，會上報到此數據源中',
  auth: {
    name: '授權',
    'not-support': '暫不支援',
  },
  status: {
    title: '狀態',
    enabled: '啟用中',
    disabled: '停用中',
  },
  form: {
    other: '其他',
    name: '名稱',
    name_msg: '請輸入字母/數字/下劃線，必須以字母開頭',
    name_msg2: '最少輸入三位',
    timeout: '超時 (單位：ms)',
    auth: '授權',
    username: '使用者名稱',
    password: '密碼',
    skip_ssl_verify: '跳過 SSL 驗證',
    yes: '是',
    no: '否',
    headers: '自定義 HTTP 標頭',
    description: '備註',
    cluster: '關聯告警引擎叢集',
    cluster_tip: '在多個機房的架構下，有時會部署多個告警引擎叢集，對應邊緣機房的數據源，需要關聯相應機房的告警引擎叢集，如果只有一個叢集，保持默認即可',
    cluster_confirm: '發現你的數據源沒有關聯告警引擎叢集，將無法用來做告警，是否去關聯下告警引擎叢集？',
    cluster_confirm_ok: '不做關聯',
    cluster_confirm_cancel: '去做關聯',
    url_no_spaces_msg: '請勿輸入空格',
    prom: {
      write_addr_tip: '記錄規則產生的資料的回寫地址，常見時序資料庫配置示例',
      read_addr: '時序庫內網地址',
      read_addr_tip: '通常用於邊緣機房下沉部署告警引擎的場景，如果該欄位不為空，n9e-edge 會使用該地址訪問時序庫，如果該欄位為空，n9e-edge 會使用上面的 URL 訪問時序庫',
      url_tip: '常見時序數據庫配置示例（兼容 Prometheus 查詢 API）：',
      help_content: '沒有部署時序庫？可參考 <a>安裝手冊</a> 安裝部署',
      prom_installation_title: '安裝手冊',
      prom_installation: '到夜鶯部署的機器上，執行如下命令，安裝 Prometheus 時序庫，生產環境，建議部署集群版的 VictoriaMetrics，可參考 <a>官方文檔</a>',
    },
    es: {
      enable_write: '允許寫入',
      version: '版本',
      max_shard: '最大併發分片請求數',
      min_interval: '最小時間間隔 (s)',
      min_interval_tip: '按時間間隔自動分組的下限。建議設定為寫入頻率，例如，如果資料每分鐘寫入一次，則為 1m。',
    },
    jaeger: {
      version: '版本',
    },
    ck: {
      title: '資料庫基本資訊',
      addr: '資料庫地址',
    },
    sls: {
      title: '服務入口',
      endpoint: '訪問域名（私網域名/公網域名/跨域域名）',
      access: '授權',
      endpoint_link: '配置說明',
    },
    os: {
      title: 'OpenSearch 基本資訊',
      enable_write_title: '是否允許寫入',
      enable_write: '允許寫入',
    },
  },
};

export default zh_HK;
