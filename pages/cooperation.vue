<template>
    <div class="page-container">
        <div class="contact">
            <div class="qr">
                <p>通讯</p>
                <img src="../assets/images/qr.png" alt="" />
            </div>
            <div class="info">
                <p>京北组(北京)室内设计有限公司</p>
                <hr style="width: 80%; margin: 0 auto" />
                <p>
                    <span>地址:</span>
                    贵阳漸劑大唐东原财材富广场栋
                    <span>电话:</span>
                    +86 136549865465
                    <span>邮箱:</span>
                    magytmaisonalbarhoteks.com
                </p>
            </div>
            <div class="btn-group">
                <el-button type="text" size="large" @click="toProjectShow">效果图设计</el-button>
                <span style="color: white; font-size: 20px; color: #827573">|</span>
                <el-button type="text" size="large" @click="toConceptShow">方案设计</el-button>
                <span style="color: white; font-size: 20px; color: #827573">|</span>
                <el-button type="text" size="large" @click="toProjectShow">联系方式</el-button>
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
            dialogVisible: false,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        tusome() {},
        toProjectShow() {
            this.$router.push("/project-show");
        },
        toConceptShow() {
            this.$router.push("/concept-design");
        },
    },
};
</script>

<style scoped lang="less">
.page-container {
    background-image: url("../assets/images/cooperation.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .contact {
        background-color: #2c1410b4;
        height: 100vh;
        position: relative;
        .qr {
            p {
                font-size: 40px;
                color: white;
                margin: 20px 0;
            }
            margin-top: 300px;
            text-align: center;
        }
        .info {
            margin-top: 100px;
            p {
                color: white;
                margin: 20px 0;
                text-align: center;
            }
            span {
                margin: 0 20px;
            }
            p:first-child {
                font-size: 30px;
            }
            p:last-child {
                font-size: 20px;
            }
        }
        .btn-group {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 20px;
            .el-button {
                margin: 0 20px;
                color: #827573;
                font-size: 25px !important;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
}
</style>
