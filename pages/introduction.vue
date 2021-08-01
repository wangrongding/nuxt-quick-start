<template>
    <div class="page-container">
        <div class="content">
            <div class="title">
                <p style="font-size: 28px">公司概述</p>
                <p style="font-size: 12px">Company overview</p>
            </div>
            <div class="introduce">
                <p>
                    公司概述京北組(北京)室内設計有限公司,由楊工組建創辦,200年畢業於清華大學美術學院環境藝術设计系,十余年來設計案例遍布全國多個省市,設計業務涵蓋:酒店會所
                    商業地產、私人住宅、辦公空間
                    京北組是集合業內各大專項資深設計團隊,組合于壹體的精品型創公司,佀導提倛全項目壹體化解泱方案.讲究设计策眳,莕于解决冋颎。團隊核心:創意設計組、照明設
                    計組、機電設計組、導視設計組、軟裝陳設組、高端表現組、方案深化組。京北組注重在設計中把握毎壹環節與細節,讲究理性科学的设计手法,最終为客戶呈现具有品牌
                    文化氣質的精品方案
                    京北组追求的是一种简致而美的设计风格,擅长利用功能与美的组合、材质与艺术的组合、灯光与色彩的组合、文化与元素的组合。我们以设计为人服务的原则,始终坚信
                    的设计可以改变人的生活方式、生活状态、生活环境,致力打造人与自然的完美结合,注重塑造作品气质,将自然界的魅力散落到项目的每一个角落。
                    “減法设计”是我们一贯主张的设计手法,摒弃夸张与浮躁的堆砌,追求自然、简单、平和、含蓄的意境美
                </p>
                <p>
                    he interior design( Beijing)co LTD of JINGBEI Group has founded by Designer
                    Yang, who graduated from environmental art design department of tsinghua
                    university academy of fine arts in 2003. The design ciples. The team cove:
                    Creative design group, Lighting design group, Electrical design group, Guide
                    design group, Accessory design group, High Point rendering group, In-depth
                    Blueprint group JINGBEI group quality space simplicity and perfection, skilled
                    in combine with the functions and beauty, the materials and arts, the lighting
                    and color nd elements. The service principle of company is always believes a
                    good design can change people's ways of life and living environment. We effort
                    to take the perfect combination of people and nature, pay attention to improve
                    space temperament, scatter the charm of nature to every corner of projects,
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    async asyncData({ $axios }) {
        // await $axios.$get();
    },
    data() {
        return {};
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
    height: 100vh;
    width: 100vw;
    padding-top: 250px;
    box-sizing: border-box;
    background-image: url("../assets/images/introduction.jpg");
    color: white;
    .content {
        background-color: #2c14106c;
        margin: 0 auto;
        width: 100%;
        padding: 100px 200px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .title {
        width: 200px;
    }
    .introduce {
        flex: 1;
        p:last-child {
            margin-top: 50px;
        }
    }
}
</style>
