<script lang="ts">
    import {
        getDiveByNumber,
        getSKG,
        type Dive,
        type Group,
    } from "$lib/diveDB";

    let showEasyDiveInput = false;
    let dive: Dive | undefined;
    let number: number;
    let group: Group = "1";
    let subGroup: Group = "1";
    let saults = "2";
    let twists = "2";
    let isFlying = false;

    const onChangeNumberHandler = (_e: any) => {
        if (showEasyDiveInput) {
            return numberToExtInput();
        }
        dive = getDiveByNumber(`${number}`);
    };

    const toggleMode = (e: any) => {
        showEasyDiveInput = e.target.checked;
        showEasyDiveInput && numberToExtInput();
    };

    const numberToExtInput = () => {
        let tmp = `${number}`;
        if (tmp.length < 3 || !"123456".includes(tmp[0])) return;
        group = tmp[0];
        if ("1234".includes(group)) {
            isFlying = tmp[1] === "1";
        }
        if (group === "5") {
            subGroup = tmp[1];
        }
        if (group === "6") {
            subGroup = tmp[1][0];
        }
        saults = tmp[2];
        if (group === "5" || (group === "6" && subGroup.charAt(0) === "5")) {
            twists = tmp[3];
        }
        dive = getDiveByNumber(tmp);
    };

    const extInputToNumber = () => {
        let tmp = `${group}`;
        if ("1234".includes(group)) {
            tmp += isFlying ? "1" : "0";
        }
        if (group === "5") {
            tmp += subGroup;
        }
        if (group === "6") {
            tmp += subGroup.charAt(subGroup.length - 1);
        }
        tmp += saults;
        if (group === "5" || (group === "6" && subGroup.charAt(0) === "5")) {
            tmp += twists;
        }
        number = parseInt(tmp);
        dive = getDiveByNumber(tmp);
    };

    const onChangeDirectionHandler = (e: any) => {
        if (!e?.target?.value) return;
        group = e.target.value;
        extInputToNumber();
    };

    const onChangeSubDirectionHandler = (e: any) => {
        if (!e?.target?.value) return;
        subGroup = e.target.value;
        extInputToNumber();
    };

    const onChangeSaultHandler = (e: any) => {
        if (!e?.target?.value) return;
        saults = e.target.value;
        extInputToNumber();
    };

    const onChangeTwistHandler = (e: any) => {
        if (!e?.target?.value) return;
        twists = e.target.value;
        extInputToNumber();
    };

    const onChangeFlyingHandler = (e: any) => {
        isFlying = e.target.checked;
        extInputToNumber();
    };

    const formatSKG = (skg: number | null) => {
        return skg ? skg.toFixed(1) : "-/-";
    };
</script>

<p class="w-full pt-4 text-center font-bold">
    {dive ? dive.de : "Warte auf Eingabe"}
</p>

<div class="flexbox p-5">
    <label for="input_number">Sprungnummer</label>
    <input
        id="input_number"
        maxlength="4"
        bind:value={number}
        on:change={onChangeNumberHandler}
        class="w-12 pl-1 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
    />

    <label for="check_erweitert">#</label>
    <input
        id="check_erweitert"
        type="checkbox"
        on:click={toggleMode}
        value="{!showEasyDiveInput
            ? 'Zeige'
            : 'Verstecke'} erweiterte Sprungeingabe"
    />

    {#if showEasyDiveInput}
        <br />
        <label for="group">Gruppe</label>
        <select
            class="pl-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="group"
            on:change={onChangeDirectionHandler}
            bind:value={group}
        >
            <option value="1">Vorwärts</option>
            <option value="2">Rückwärts</option>
            <option value="3">Auerbach</option>
            <option value="4">Delphin</option>
            <option value="5">Schraube</option>
            <option value="6">Handstand</option>
        </select>

        {#if group === "5" || group === "6"}
            <select
                class="pl-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                name="subdirection"
                on:change={onChangeSubDirectionHandler}
                bind:value={subGroup}
            >
                {#if group === "6"} <option value="0">Kopfsprung</option> {/if}
                <option value="1">Vorwärts</option>
                <option value="2">Rückwärts</option>
                <option value="3">Auerbach</option>
                {#if group === "5"} <option value="4">Delphin</option> {/if}
                {#if group === "6"}
                    <option value="5_1">Vorwärts Schraube</option>
                {/if}
                {#if group === "6"}
                    <option value="5_2">Rückwärts Schraube</option>
                {/if}
            </select>
        {/if}

        <br />
        <label for="saults">Saltodrehungen</label>
        <select
            class="pl-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="saults"
            on:change={onChangeSaultHandler}
            bind:value={saults}
        >
            <option value="0">0</option>
            <option value="1">½</option>
            <option value="2">1</option>
            <option value="3">1½</option>
            <option value="4">2</option>
            <option value="5">2½</option>
            <option value="6">3</option>
            <option value="7">3½</option>
            <option value="8">4</option>
            <option value="9">4½</option>
            <option value="10">5</option>
            <option value="11">5½</option>
        </select>

        {#if group === "5" || (group === "6" && subGroup.charAt(0) === "5")}
            <br />
            <label for="twists">Schrauben:</label>
            <select
                class="pl-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                name="twists"
                on:change={onChangeTwistHandler}
                bind:value={twists}
            >
                <option value="1">½</option>
                <option value="2">1</option>
                <option value="3">1½</option>
                <option value="4">2</option>
                <option value="5">2½</option>
                <option value="6">3</option>
                <option value="7">3½</option>
                <option value="8">4</option>
                <option value="9">4½</option>
            </select>
        {/if}

        {#if "1234".includes(group)}
            <br />
            <label for="check_isFlying">Fliegend?</label>
            <input
                type="checkbox"
                name="check_isFlying"
                on:change={onChangeFlyingHandler}
            />
        {/if}
    {/if}

    {#if dive}
        <table class="min-w-full mt-6">
            <thead class="bg-white border-b">
                <tr>
                    <th>SKG</th>
                    <th class="font-normal">A</th>
                    <th class="font-normal">B</th>
                    <th class="font-normal">C</th>
                    <th class="font-normal">D</th>
                </tr>
            </thead>
            <tbody>
                {#each [1, 3, 5, 7.5, 10] as h}
                    <tr
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                        <td class="text-right pr-2">{h}m</td>
                        <td>{formatSKG(getSKG(dive.id, parseInt(h), "A"))}</td>
                        <td>{formatSKG(getSKG(dive.id, parseInt(h), "B"))}</td>
                        <td>{formatSKG(getSKG(dive.id, parseInt(h), "C"))}</td>
                        <td>{formatSKG(getSKG(dive.id, parseInt(h), "D"))}</td>
                    </tr>
                {/each}
<!-- 
                <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                    <td class="text-right pr-2">3m</td>
                    <td>{formatSKG(getSKG(dive.id, 3, "A"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 3, "B"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 3, "C"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 3, "D"))}</td>
                </tr>
                <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                    <td class="text-right pr-2">5m</td>
                    <td>{formatSKG(getSKG(dive.id, 5, "A"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 5, "B"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 5, "C"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 5, "D"))}</td>
                </tr>
                <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                    <td>7.5m</td>
                    <td>{formatSKG(getSKG(dive.id, 7, "A"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 7, "B"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 7, "C"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 7, "D"))}</td>
                </tr>
                <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                    <td class="text-right pr-2">10m</td>
                    <td>{formatSKG(getSKG(dive.id, 10, "A"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 10, "B"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 10, "C"))}</td>
                    <td>{formatSKG(getSKG(dive.id, 10, "D"))}</td>
                </tr> -->
            </tbody>
        </table>
    {/if}
</div>

<style>
    table {
        text-align: left;
    }
</style>
