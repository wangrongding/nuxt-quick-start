<template>
    <div class="page-container">
        <div class="back el-icon-close" @click="back"></div>
        <el-carousel height="800px" indicator-position="outside" arrow="hover">
            <el-carousel-item v-for="(item, index) in imageList" :key="index">
                <el-image style="" :src="item.url" fit="contain"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    components: {},
    layout: "singleLayout",
    props: {},
    data() {
        return {
            imageList: [
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_ports_1961_shanghai_011.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=98a6bb2bbb0fc2ab6f3e1546f9fb02e6",
                    name: "xxxxx",
                },
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
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_oiseau__DSC8945.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=c7a289ca645b40d2a7d2c9a6d3581eab",
                    name: "xxxxx",
                },
                {
                    url: "https://yabu.imgix.net/https%3A%2F%2Fyabupushelberg.com%2Fuploads%2Fhome%2Fyabupushelberg_las_alcobas_napa_valley_23.jpg?auto=compress%2Cformat&cs=srgb&dpi=72&fit=max&position=50%2050&q=80&w=1200&s=62226833bf85d30f70eeda3241d5be35",
                    name: "xxxxx",
                },
            ],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.$nextTick(() => {
            const btnList = document.querySelectorAll(".el-carousel__button");
            console.log(btnList);
            for (let i = 0; i < this.imageList.length; i++) {
                btnList[i].style.background = `url(${this.imageList[i].url})`;
                btnList[i].style.backgroundSize = `100%  100% `;
            }
            // btnList[0].style.background = url(require(this.imageList[0].url));
        });
    },
    methods: {
        back() {
            this.$router.go("-1");
        },
    },
};
</script>

<style scoped lang="less">
.page-container {
    background-color: black;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;
    .back {
        position: absolute;
        top: 50px;
        right: 50px;
        color: white;
        z-index: 999;
        cursor: pointer;
        width: 60px;
        height: 60px;
        line-height: 60px;
        background: rgba(128, 128, 128, 0.267);
        border-radius: 50%;
        text-align: center;
    }
    ::v-deep .el-carousel__indicators {
        bottom: 50px;
        .el-carousel__indicator--horizontal {
            .el-carousel__button {
                background: none;
                height: 70px;
                width: 70px;
                text-align: center;
            }
        }
    }
    ::v-deep .el-carousel__container {
        text-align: center;
    }
}
</style>
