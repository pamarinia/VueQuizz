<template>
    <div>
        <QuizzHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question 
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result 
                v-else
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
                :quizQuestionLength="quiz.questions.length"
            />
        </div>
    </div>
</template>

<script setup>
    import Question from "../components/Question.vue"
    import QuizzHeader from "../components/QuizzHeader.vue"
    import Result from "../components/Result.vue"
    import {useRoute}  from "vue-router"
    import { ref, watch, computed} from "vue"
    import quizes from "../data/quizes.json"

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id === quizId)
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0)
    const showResults = ref(false)

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswers.value++;
        }
        if(quiz.questions.length === currentQuestionIndex.value + 1){
            showResults.value = true;
        }
        currentQuestionIndex.value++;
    }
</script>
