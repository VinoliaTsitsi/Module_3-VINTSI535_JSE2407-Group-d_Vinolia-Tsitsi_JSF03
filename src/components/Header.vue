<template>
    <header>
    <div claa="logo ">My App Logo</div>
    <nav>
        <li>categories</li>
        <li>search</li>
        <li>Login</li>
        <li>cart</li>
    </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>