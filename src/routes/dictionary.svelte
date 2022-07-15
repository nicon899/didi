<script lang=ts>
    import { dictionary, type DictionaryEntry } from "$lib/dictionary";
    let filteredDictonary: DictionaryEntry[];

    const filterDictionary = (filter: string) => {
        filter = filter.toLowerCase()
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

<input
    placeholder="Suche"
    on:keyup={(e) => filterDictionary(e.target.value)}
/>
<table>
    <tr
        ><th>🇩🇪Deutsch</th>
        <th>🇬🇧English</th>
        <th>🇺🇦українська (ukrayinsʹka)</th>
    </tr>
    {#each filteredDictonary as v, i}
        <tr class={v.isHeader ? "header" : ""}>
            <td>{v.de}</td>
            <td>{v.en}</td>
            <td>{v.ukr}</td>
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
