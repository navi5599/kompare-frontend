import customerStore from "../stores/customerStore";

export const resetStates = () => {
  customerStore.email = ''
  customerStore.firstName = ''
  customerStore.lastName = ''
  customerStore.city = ''
  customerStore.birthday = ''
  customerStore.insurance = ''
  customerStore.errorMessage = ''
}