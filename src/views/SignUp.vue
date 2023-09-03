<template>
    <form class="form w-100" @submit.prevent="registerUser">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label>Email address:</label>
                    <input type="email" class="form-control form-control-solid" placeholder="Enter email" v-model="email" required/>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control form-control-solid" placeholder="Enter password" required v-model="password"/>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
            </div>
        </div>
</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const email = ref('');
const password = ref('');
const router = useRouter();


async function registerUser() {
    console.log("stuck here >")

if (!email.value || !password.value) return;

fetch(`https://reqres.in/api/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
    })
})
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("SignedInToken", JSON.stringify(data.token));
        console.log(localStorage.getItem('SignedInToken'))
        router.push('/')
    })
}
</script>