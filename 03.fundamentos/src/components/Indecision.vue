<template>
    <img src="https://azurecomcdn.azureedge.net/cvt-b25e2f3ec9c26362149a7eee6f74a05256aebbf9fc0478ff53685ffa53bf98b1/images/shared/social/azure-icon-250x250.png" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input type="text" placeholder="Hazme una pregunta" name="" id="">
        <p>Recuerda terminar con un signo de interrogación ( ? )</p>
        <div>
            <h2>Seré millonario?</h2>
            <h1>Si, No, .... pensando</h1>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>