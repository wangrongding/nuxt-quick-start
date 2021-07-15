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
                    url: require("../assets/images/1.jpg"),
                    name: "xxxxx",
                },
                {
                    url: require("../assets/images/2.jpg"),
                    name: "xxxxx",
                },
                {
                    url: require("../assets/images/3.jpg"),
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
