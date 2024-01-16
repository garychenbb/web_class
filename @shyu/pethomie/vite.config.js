import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    devServer: {
        proxy: {
            "/api": {
                // 代理接口
                target: "http://localhost:8080",
                ws: true, // proxy websockets
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    // 路径重写
                    "^/api": "/mock",
                },
            },
        },
    },
});

// 假資料這樣接
// axios.get('/api/test')
// .then(function(res){
//   console.log(res);
// })
// .catch(function(err){
//   console.log(err);
// });
