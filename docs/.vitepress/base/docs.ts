import { enUSConfig, zhCNConfig } from "../configs";

export const docsConfig = {
    base: "/",
    title: "梦和远方",
    description: "梦和远方的博客",
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

