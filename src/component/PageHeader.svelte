<script>
     import { afterUpdate,beforeUpdate, onMount } from 'svelte';

    const contents = [{
        id : 0,
        label : "portfolio",
        isActive : true
    }, {
        id : 1,
        label : "resume",
        isActive : false 
    }]

    let isActive = false
    let listRef

    export let items = []
    export let activeTabValue



    onMount(()=>{

    })


    beforeUpdate(()=>{
        
    })
    afterUpdate(()=>{
        
    })

</script>


<header class="header">
    <div class="left">
        <figure class="header-logo">
            <img src="" alt="header 로고">
        </figure>
    </div>
    <div class="right">
        <ul class="list">
            {#each contents as content, i (content.id)}
                <li          
                class:active={content.isActive} class="li"
                bind:this={listRef}
                on:click={()=>{
                    contents[0].isActive = !contents[0].isActive
                    contents[1].isActive = !contents[1].isActive
                }}>{content.label}</li>
            {/each}
        </ul>
    </div>
</header>

<style lang="scss">
    .header{
        position: fixed;
        top: 0;
        width: calc(100% - 2em);
        padding: 1em;
        background: rgba($sy-white, 0.9);
        display: flex;
        justify-content: space-between;

        &-logo{
            
            width: 120px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: yellowgreen;
        }
    }

    .list{
        display: flex;
        gap: 16px;
        .li{
            @include font($size : 1.6rem);
            transition: 0.3s;
        }
    }

    .active{
        background: tomato;
        
    }
</style>