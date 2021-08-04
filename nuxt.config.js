// eslint-disable-next-line
const HardSourceWebpackPlugin = import("hard-source-webpack-plugin"); // 为模块提供中间缓存，效率提升很大
export default {
    target: "static", // default is 'server'
    server: {
        port: 9521,
        host: "localhost",
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        // 网页的title SEO 优化部分
        title: "我是title",
        // html标签属性
        htmlAttrs: {
            lang: "en", // 语言 【zh，en...】
        },
        meta: [
            // 声明文档使用的字符编码,一定要写第一行，不然就可能会产生乱码了
            { charset: "utf-8" },
            /* 移动端常用的meta
            width viewport 宽度(数值/device-width)
            height viewport 高度(数值/device-height)
            initial-scale 初始缩放比例
            maximum-scale 最大缩放比例
            minimum-scale 最小缩放比例
            user-scalable 是否允许用户缩放(yes/no) */
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            // 禁止自动探测并格式化手机号码
            { name: "format-detection", content: "telephone=no" },
            // 定义对页面的描述：SEO 优化部分
            { name: "description", content: "汪荣顶" },
            { hid: "description", name: "description", content: "汪荣顶,汪荣顶2,汪荣顶33" },
            // 定义页面的最新版本：
            { name: "revised", content: "David, 2008/8/8/" },
            // 每小时刷新一次页面
            // { "http-equiv": "refresh", content: "3600" },
            // 重定向，用http头部内容控制，那么就可以这样控制：
            // { "http-equiv": "refresh", content: "5;url=http://www.baidu.com/" },
            // 用webkit内核进行解析
            { name: "renderer", content: "webkit" },
            // 定义针对搜索引擎的关键词：SEO 优化部分
            { name: "keywords", content: "HTML, CSS, JavaScript" },
            // 定义网页作者:SEO 优化部分
            { name: "author", content: "author,email address" },
            // 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。
            // SEO 优化部分
            { name: "robots", content: "index,follow" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            // 引入css样式文件
            // { rel: "stylesheet", type: "text/css", href: "" },
        ],
        script: [
            /*  {
                src: "~/static/js/flexible.js",
                type: "text/javascript",
                charset: "utf-8",
            }, */
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["element-ui/lib/theme-chalk/index.css", "@/assets/style/reset.less"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // 插件
    plugins: ["~/plugins/custom-plugin.js", "@/plugins/element-ui"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
        // plugins: [new HardSourceWebpackPlugin()],
    },
};
