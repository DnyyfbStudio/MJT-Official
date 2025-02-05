import type { DefaultTheme } from "vitepress";
export const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
        message: "<img src='https://cdn.magicjun.cn:32323/MJT/moeicon.png' alt='萌ICP' width='25px' height='25px'><a href='https://icp.gov.moe/?keyword=20210262' target='_blank'>萌ICP备20210262号</a>",
        copyright: "Copyright ©2018-2025 幻菌科技 All Right Reserved.",
    },
    // logo
    logo: "https://cdn.magicjun.cn:32323/MJT/logo.svg",
    // 首页
    // logoLink: "/",
    // i18n路由，false切换首页，true内容切换
    i18nRouting: true,
    // 搜索配置（二选一）
    /* search: {
        // 本地离线搜索
        provider: "local",
        // 多语言搜索配置
        options: {
            locales: {
                "zh-CN": {
                    translations: {
                        button: {
                            buttonText: "搜索",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            displayDetails: "显示详细列表",
                            noResultsText: "无法找到相关结果",
                            resetButtonTitle: "清除查询结果",
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                            },
                        },
                    },
                },
                "en-US": {
                    translations: {
                        button: {
                            buttonText: "Search",
                            buttonAriaLabel: "Search for Documents",
                        },
                        modal: {
                            displayDetails: "Display detailed list",
                            noResultsText: "Unable to find relevant results",
                            resetButtonTitle: "Clear Query Results",
                            footer: {
                                selectText: "select",
                                navigateText: "switch",
                                closeText: "close",
                            },
                        },
                    },
                },
            },
        },
    },
     */

    // 社交链接
    socialLinks: [
        { icon: "github", link: "https://github.com/DnyyfbStudio" },
    ],
};

