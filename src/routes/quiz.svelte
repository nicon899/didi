<script lang="ts">
    import {
        getDiveByNumber,
        getSKG,
        type Dive,
        type Group,
        DIVES,
    } from "$lib/diveDB";
    import Dives from "./dives.svelte";

    let dives: Dive[];
    let diveToAskForIndex: number;
    let answer: string | null;
    let points = 0;

    const nextQuestion = () => {
        dives = [];
        for (let i = 0; i < 4; i++) {
            let i = Math.floor(Math.random() * DIVES.length);
            dives.push(DIVES[i]);
        }
        diveToAskForIndex = Math.floor(Math.random() * 3);
        answer = null;
    };
    nextQuestion();

    const onAnswer = (id: string) => {
        answer = id;
        if (id === dives[diveToAskForIndex].id) {
            points++;
        } else {
            points = 0;
        }
    };
</script>

<p class="w-full pt-4 text-center font-bold">
    {points}
</p>

<p class="w-full pt-4 text-center font-bold">
    {dives[diveToAskForIndex].de}
</p>

<input
    type="button"
    value={dives[0].id}
    on:click={(e) => onAnswer(dives[0].id)}
    class={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow " +
        (answer
            ? diveToAskForIndex === 0
                ? "border-4 border-green-600"
                : "border-4 border-rose-600"
            : "")}
/>

<input
    type="button"
    value={dives[1].id}
    on:click={(e) => onAnswer(dives[1].id)}
    class={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 " +
        (answer
            ? diveToAskForIndex === 1
                ? "border-4 border-green-600"
                : "border-4 border-rose-600"
            : "")}
/>

<input
    type="button"
    value={dives[2].id}
    on:click={(e) => onAnswer(dives[2].id)}
    class={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 " +
        (answer
            ? diveToAskForIndex === 2
                ? "border-4 border-green-600"
                : "border-4 border-rose-600"
            : "")}
/>

<input
    type="button"
    value={dives[3].id}
    on:click={(e) => onAnswer(dives[3].id)}
    class={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 " +
        (answer
            ? diveToAskForIndex === 3
                ? "border-4 border-green-600"
                : "border-4 border-rose-600"
            : "")}
/>

{#if answer}
    <p
        class={"w-full pt-4 text-center font-bold " +
            (answer === dives[diveToAskForIndex].id
                ? "text-green-600"
                : "text-red-600")}
    >
        {answer === dives[diveToAskForIndex].id ? "Richtig" : "Falsch"}
    </p>
    <input
        type="button"
        value="Next"
        on:click={(e) => nextQuestion()}
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4"
    />
{/if}
