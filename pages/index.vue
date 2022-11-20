<template>
    <div>
        <NuxtLink to="/posts">go blog</NuxtLink>
        <div>
            <button @click="signIn(undefined, { callbackUrl: '/' })">
                sign in
            </button>
            <br>
            <button @click="signIn('credentials', { callbackUrl: '/', username: 'jsmith', password: 'hunter2' })">
                sign in (credential)
            </button>
            <br>
            <button @click="signIn('github', { callbackUrl: '/' })">
                sign in (github)
            </button>
            <br>
            <button @click="signIn(undefined, { callbackUrl: '/protected/inline' })">
                sign in (with redirect to protected page)
            </button>
            <br>
            <button @click="signOut()">
                sign out
            </button>
            <br>
            <button @click="getSession({ required: false })">
                refresh session
            </button>
        </div>
    </div>
</template>

<script setup>
const {
    status,
    data,
    getSession,
    signIn,
    signOut,
} = await useSession({
    // Whether a session is required. If it is, a redirect to the signin page will happen if no active session exists
    required: false
})

// Session status: `unauthenticated`, `loading`, `authenticated`
// status.value
console.log(status.value);

// Session data, e.g., expiration, user.email, ...
// data.value
console.log(data.value);
// // Start the unbranded sign-in flow
// await signIn()

// // Logout the user
// await signOut()
</script>
