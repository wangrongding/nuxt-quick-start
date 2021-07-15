<template>
    <div class="page-container" @click="toHome">
        <p class="title" style="font-size: 35px">京北组 · 一家专业高端效果图设计表现公司</p>
        <p class="title" style="font-size: 25px">
            We are a profession a high-end rendering design company
        </p>
    </div>
</template>

<script>
export default {
    components: {},
    layout: "singleLayout",
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        setTimeout(() => {
            this.$router.push("/home");
        }, 3000);
    },
    methods: {
        toHome() {
            this.$router.push("/home");
        },
    },
};
</script>

<style scoped lang="less">
.page-container {
    user-select: none;
    cursor: pointer;
    width: 100vw;
    height: 100vh;
    background-color: #2c1410;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    .title {
        width: 750px;
        text-align: justify;
        height: 50px;
        &:after {
            display: inline-block;
            content: "";
            width: 100%;
            height: 0;
            overflow: hidden;
        }
    }
}
</style>
