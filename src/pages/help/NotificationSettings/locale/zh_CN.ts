const zh_CN = {
  title: '通知设置',
  webhooks: {
    help_content:
      '回调机制，用于夜莺和其他系统之间的集成。夜莺产生告警事件之后，会推送给各个回调地址，您可以自己开发一个 HTTP API 配置到这里，接收夜莺告警事件，进而做一些自动化的、定制化的逻辑。夜莺回调时使用的 HTTP 方法是 POST，会把告警事件的内容以 JSON 格式放到 HTTP Request Body 中，事件数据结构请参考[这里](https://github.com/ccfos/nightingale/blob/main/models/alert_cur_event.go#L19)。您可以找一台和夜莺网络互通的机器（假设其 IP 是 10.1.2.3），在上面用 nc 起一个端口，比如 `nc -k -l 4321` 即可用 nc 监听在 4321 端口，然后您把 `http://10.1.2.3:4321` 配置到回调地址里，然后去创建个告警规则，一旦触发，夜莺就会回调这个地址，您就可以在 nc 命令的输出中看到夜莺回调过来的详细数据格式了。',
    title: '回调地址',
    enable: '启用',
    note: '备注',
    url: 'URL',
    timeout: '超时 (单位: s)',
    basic_auth_user: '用户名 (Basic Auth)',
    basic_auth_password: '密码 (Basic Auth)',
    skip_verify: '跳过 SSL 验证',
    add: '添加',
    help: `
      尊敬的夜莺老铁，您好，如果您想把夜莺告警事件全部转发到另一个平台处理，可以通过这里的全局回调地址来实现。
      <br />
      <br />
      近期快猫团队提供的事件OnCall产品FlashDuty也开始公测了，欢迎体验，把各个监控系统的告警事件统一推给FlashDuty，享受告警聚合降噪、排班、认领、升级、协同处理一站式体验。
      <br />
      <br />
      <a href='https://console.flashcat.cloud/?from=n9e' target='_blank'>
        免费体验地址
      </a>
    `,
  },
  script: {
    title: '通知脚本',
    enable: '启用',
    timeout: '超时 (单位: s)',
    type: ['使用脚本', '使用路径'],
    path: '文件路径',
    content: '脚本内容',
  },
  channels: {
    title: '通知媒介',
    name: '名称',
    ident: '标识',
    ident_msg1: '标识只能包含字母、数字、下划线和中划线',
    ident_msg2: '标识已存在',
    hide: '隐藏',
    add: '添加',
    add_title: '添加通知媒介',
    edit_title: '编辑通知媒介',
    enabled: '启用',
  },
  contacts: {
    title: '联系方式',
    add_title: '添加联系方式',
    edit_title: '编辑联系方式',
  },
  smtp: {
    title: 'SMTP 设置',
    testMessage: '已发送测试邮件，请查收',
  },
  ibex: {
    title: '自愈配置',
  },
};
export default zh_CN;
