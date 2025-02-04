import { enUSConfig, zhCNConfig } from "../configs";

export const docsConfig = {
    base: "/",
    title: "幻菌科技 - 不断创新领域、探索未来，开拓奇妙体验，为推动科技进步而战。",
    description: "幻菌科技官方网站",
    lang: "zh-CN",
    lastUpdated: true,
    /* 语言配置 */
    locales: {
        // 若果配置了root，则双击title的时候不会返回/路径下了，只会返回在link路径下
        // root: { label: "简体中文", lang: "zh-CN", link: "/zh-CN",  ...zhCNConfig },
        "zh-CN": {
            label: "简体中文",
            lang: "zh-CN",
            link: "index", // index 直接跳转到首页
        },
    },
};

