<script>
     import { onMount } from 'svelte';

    const contents = [{
        id : 1,
        label : "portfolio" 
    }, {
        id : 1,
        label : "resume" 
    }]

    let isActive = false
    let listRef

    onMount(()=>{
        console.log(listRef)
    })
</script>

<header class="header">
    <div class="left">
        <button type="button" 
        
        >버튼</button>
    </div>
    <div class="right">
        <ul class="list">
            {#each contents as content, i}
                <li          
                class:active={isActive} class="li"
                bind:this={listRef}
                on:click={()=>{
                    isActive = !isActive
                    console.log(listRef.classList)
                }}>{content.label}</li>
            {/each}
            <li class:active={isActive} class="li"
                bind:this={listRef}
                on:click={()=>{
                    
                    console.log(listRef.classList)
                }}
            >
                portfolio
            </li>
            <li class:active={isActive} class="li">
                resume
            </li>
        </ul>
    </div>
</header>