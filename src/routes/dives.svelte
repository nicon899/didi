<script lang=ts>
    import {
        getDiveByNumber,
        getSKG,
        type Dive,
        type Group,
    } from "$lib/diveDB";

    let showEasyDiveInput = true;
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

    const toggleMode = (_e: any) => {
        showEasyDiveInput = !showEasyDiveInput;
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
        return skg ? skg : "-/-";
    };
</script>

<h1>Welcome</h1>

<input
    type="number"
    min="0"
    bind:value={number}
    placeholder="Sprungnummer"
    on:change={onChangeNumberHandler}
/>

<input
    type="button"
    on:click={toggleMode}
    value="{!showEasyDiveInput
        ? 'Zeige'
        : 'Verstecke'} erweiterte Sprungeingabe"
/>

{#if showEasyDiveInput}
    <label for="group">Richtung:</label>
    <select
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
        <label for="subdirection">...:</label>
        <select
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

    <label for="saults">Saltodrehungen:</label>
    <select name="saults" on:change={onChangeSaultHandler} bind:value={saults}>
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
        <label for="twists">Schrauben:</label>
        <select
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
        <label for="check_isFlying">Fliegend?</label>
        <input
            type="checkbox"
            name="check_isFlying"
            on:change={onChangeFlyingHandler}
        />
    {/if}
{/if}

{#if dive}
    <p>{dive.de}</p>
    <table>
        <tr><th>Höhe</th><th>A</th><th>B</th><th>C</th><th>D</th></tr>
        <tr>
            <td>1</td>
            <td>{formatSKG(getSKG(dive.id, 1, "A"))}</td>
            <td>{formatSKG(getSKG(dive.id, 1, "B"))}</td>
            <td>{formatSKG(getSKG(dive.id, 1, "C"))}</td>
            <td>{formatSKG(getSKG(dive.id, 1, "D"))}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{formatSKG(getSKG(dive.id, 3, "A"))}</td>
            <td>{formatSKG(getSKG(dive.id, 3, "B"))}</td>
            <td>{formatSKG(getSKG(dive.id, 3, "C"))}</td>
            <td>{formatSKG(getSKG(dive.id, 3, "D"))}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>{formatSKG(getSKG(dive.id, 5, "A"))}</td>
            <td>{formatSKG(getSKG(dive.id, 5, "B"))}</td>
            <td>{formatSKG(getSKG(dive.id, 5, "C"))}</td>
            <td>{formatSKG(getSKG(dive.id, 5, "D"))}</td>
        </tr>
        <tr>
            <td>7.5</td>
            <td>{formatSKG(getSKG(dive.id, 7, "A"))}</td>
            <td>{formatSKG(getSKG(dive.id, 7, "B"))}</td>
            <td>{formatSKG(getSKG(dive.id, 7, "C"))}</td>
            <td>{formatSKG(getSKG(dive.id, 7, "D"))}</td>
        </tr>
        <tr>
            <td>10</td>
            <td>{formatSKG(getSKG(dive.id, 10, "A"))}</td>
            <td>{formatSKG(getSKG(dive.id, 10, "B"))}</td>
            <td>{formatSKG(getSKG(dive.id, 10, "C"))}</td>
            <td>{formatSKG(getSKG(dive.id, 10, "D"))}</td>
        </tr>
    </table>
{:else}
    <p>Unbekannter Sprung</p>
{/if}
