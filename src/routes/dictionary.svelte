<script lang="ts">
    import { dictionary, type DictionaryEntry } from "$lib/dictionary";
    let filteredDictonary: DictionaryEntry[];
    let showDE = true;
    let showEN = false;
    let showUKR = true;

    const filterDictionary = (filter: string) => {
        filter = filter.toLowerCase();
        let tmp: DictionaryEntry[] = [];
        dictionary.forEach((d) => {
            if (
                d.de.toLowerCase().includes(filter) ||
                d.en.toLowerCase().includes(filter) ||
                d.ukr.toLowerCase().includes(filter)
            ) {
                tmp.push(d);
            }
        });
        filteredDictonary = tmp;
    };
    filterDictionary("");
</script>

<div class="flex justify-between px-2">
    <input
        class="flex-1"
        placeholder="Suche"
        on:keyup={(e) => filterDictionary(e.target.value)}
    />
    <div class="flex">
        <label for="check_de">🇩🇪</label>
        <input
            class="inline mr-2"
            type="checkbox"
            name="check_de"
            on:change={(e) => (showDE = e.target.checked)}
            bind:checked={showDE}
        />
        <label for="check_en">🇬🇧</label>
        <input
            class="inline mr-2"
            type="checkbox"
            name="check_en"
            on:change={(e) => (showEN = e.target.checked)}
            bind:checked={showEN}
        />
        <label for="check_ukr">🇺🇦</label>
        <input
            class="inline mr-2"
            type="checkbox"
            name="check_ukr"
            on:change={(e) => (showUKR = e.target.checked)}
            bind:checked={showUKR}
        />
    </div>
</div>

<table class="mt-8">
    <tr>
        {#if showDE}<th>🇩🇪Deutsch</th>{/if}
        {#if showEN}<th>🇬🇧English</th>{/if}
        {#if showUKR}<th>🇺🇦українська (ukrayinsʹka)</th>{/if}
    </tr>
    {#each filteredDictonary as v, i}
        <tr class={v.isHeader ? "header border-b border-black" : "border-b"}>
            {#if showDE} <td>{v.de}</td> {/if}
            {#if showEN} <td>{v.en}</td>{/if}
            {#if showUKR}<td>{v.ukr}</td>{/if}
        </tr>
    {/each}
</table>

<style>
    table {
        text-align: left;
    }
    .header {
        color: red;
        font-weight: bold;
    }
</style>
