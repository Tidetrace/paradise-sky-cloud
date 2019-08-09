<template>
  <el-container>
    <!-- Header -->
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">我的主页</el-menu-item>
          <el-menu-item index="2-2">联系我们</el-menu-item>
          <el-menu-item index="2-3">关于我们</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">友情链接</template>
            <el-menu-item index="2-4-1">百度</el-menu-item>
            <el-menu-item index="2-4-2">谷歌</el-menu-item>
            <el-menu-item index="2-4-3">搜狗</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">登录</a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!-- Aside -->
      <el-aside width="280px">
       Aside
      </el-aside>
      <el-container>
        <!-- Main-top -->
        <el-main>
          <el-carousel :interval="3000" autoplay type="card" height="200px">
            <el-carousel-item v-for="item in 5" :key="item">
              <el-image :src="src" ></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <!-- Main -->
        <el-main>
          <router-view />
        </el-main>
        <!-- Footer -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      src:
        "http://img2.imgtn.bdimg.com/it/u=2229243519,2947646805&fm=26&gp=0.jpg",
      url:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 走马灯 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
