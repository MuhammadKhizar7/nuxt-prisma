<template>
    <div>
        <h1>Users </h1>
        <div class="users">
            <div v-for="user in users" :key="user.id">
                <router-link :to="'/users/' + user.id">{{ user.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: users } = await useFetch('/api/users')
console.log(users);
</script>
