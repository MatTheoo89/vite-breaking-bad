import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://www.breakingbadapi.com/api/characters',
    characterListData: [],
    isLoading: false,
    categoryList:['Breaking Bad','Better Call Saul'],
    SelectedToFilter: '',
});