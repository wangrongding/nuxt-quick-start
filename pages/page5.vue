<template>
    <!-- <Tutorial /> -->
    <div class="page-container">
        <el-carousel height="100vh" indicator-position="none" arrow="hover">
            <el-carousel-item v-for="(item, index) in imageList" :key="index">
                <div class="describe">
                    <span style="margin-right: 50px">{{ index + 1 + "/" + imageList.length }}</span>
                    <span>{{ item.name }}</span>
                    {{ item.name + index }}
                </div>
                <!-- <img style="height: 100vh" class="image-item" :src="item.url" alt="" /> -->
                <el-image
                    style="width: 100vw; height: 100vh"
                    :src="item.url"
                    fit="cover"
                ></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {},
    data() {
        return {
            imageList: [
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_oiseau__DSC8945.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=c7a289ca645b40d2a7d2c9a6d3581eab",
                    name: "xxxxx",
                },
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_las_alcobas_napa_valley_23.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=62226833bf85d30f70eeda3241d5be35",
                    name: "xxxxx",
                },
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_ports_1961_shanghai_011.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=98a6bb2bbb0fc2ab6f3e1546f9fb02e6",
                    name: "xxxxx",
                },
            ],
        };
    },
    mounted() {
        // sessionStorage.setItem("init", true);
    },
    methods: {},
};
</script>
<style lang="less" scoped>
.page-container {
    .image-item {
        width: 100%;
    }
    .describe {
        position: absolute;
        left: 100px;
        bottom: 100px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        z-index: 999;
    }
}
</style>
