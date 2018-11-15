<template>
    <el-header>
        <el-row>
            <el-col :span="2">
                <div class="navbar__title">
                    <a href="/">Todo App</a>
                </div>
            </el-col>
            <el-col :span="10">
                <ul class="el-menu el-menu--horizontal navbar__menu">
                    <li class="el-menu-item">
                        <router-link to="/" class="navbar__link">Home</router-link>
                    </li>
                    <li class="el-menu-item">
                        <router-link to="/about" class="navbar__link">About</router-link>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
    .el-header {
        margin-bottom: 60px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    .navbar__menu {
        background-color: #fff;
    }
    .navbar__title {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 12px;
        height: 60px;
        line-height: 60px;
        font-size: 1.5em;
        font-weight: bold;
    }
    .navbar__link {
        text-decoration: none;
    }
    .router-link-exact-active {
        font-weight: bold;
    }
    .navbar__title a {
        color: #48576a;
        text-decoration: none;
    }
</style>
