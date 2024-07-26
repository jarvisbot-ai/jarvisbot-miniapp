const API_BASE_URL = '',
    USE_LOCAL = false,
    OSS_URL = USE_LOCAL ? '' : 'https://oss.jarvisbot.ai',
    VERSION = 'v1.0.0'

let GLOBAL_MANIFEST = {}

fetch('/manifest.json')
    .then(r => r.json())
    .then(data => (GLOBAL_MANIFEST = data))
