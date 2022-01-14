<script>
import PageHeader from '../component/PageHeader.svelte';
import "../app.scss";
import PageFooter from '../component/PageFooter.svelte';
</script>


<PageHeader/>
<main>
	<!-- 하위 페이지에서 나오는 영역 -->
	<slot />
</main>
<PageFooter/>