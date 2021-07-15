<template>
    <div class="page-container">
        <div
            v-for="(item, index) in list"
            :key="index"
            :class="`${
                index % 2 == 0 ? 'works-item works-item-left' : 'works-item works-item-right'
            }`"
        >
            <div class="item-img">
                <el-image style="width: 100%; height: 100%" :src="item.url" fit="cover"></el-image>
            </div>
            <div class="item-introduce">
                <div class="introduce-title">某某酒店</div>
                <div class="introduce-title-en">Momo Hotel</div>
                <p class="introduce">
                    XX温泉酒店于工作室2021年完成设计,项目设计历时一年
                    半,该项目位于隆化县XX地,总点地面积2万平方米,这种
                    新的温泉设计在平衡方面探索了新的材料。以与该项目主旨
                    概念相关的施工过程为灵感,抛光和粗糙的表面在整个项目
                    中形成鲜明对比。它是原点与变体的相遇,粗糙与光滑的相 遇,混沌与秩序的转变。
                </p>
                <p class="introduce">
                    XX Hot Spring Hotel completed the design in 2021 of the studio, which lasted one
                    and a half years. The project is located in XX, Longhua County, with a total
                    area of 20000 square meters. This new hot spring design explored new materials
                    in terms of balance. inspired by the construction process related to the
                    project's concept of the subject matter, polished and rough surfaces form a
                    sharp contrast throughout the project. It is the meeting of origin and
                    variation, rough and smooth, chaos and order transforma
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            list: [
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
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="less">
.page-container {
    .works-item {
        height: 650px;
        display: flex;
    }

    .item-img {
        // width: 600px;
        width: 65%;
        margin-bottom: 20px;
    }
    .item-introduce {
        flex: 1;
        padding-top: 80px;
        position: relative;
        .introduce-title {
            width: 80px;
            height: 35px;
            font-size: 20px;
            color: white;
            line-height: 35px;
            background: rgba(55, 28, 23, 0.75);
            padding: 0 50px;
            text-align: center;
        }
        .introduce-title-en {
            font-size: 18px;
            padding: 0 20px;
            margin-top: 50px;
        }
        .introduce {
            margin: 20px;
            // width: 100%;
        }
    }
    .works-item-left {
        flex-direction: row;
        text-align: left;
        .introduce-title {
            position: absolute;
            left: -20px;
        }
    }
    .works-item-right {
        flex-direction: row-reverse;
        text-align: right;
        .introduce-title {
            position: absolute;
            right: -20px;
        }
    }
}
</style>
