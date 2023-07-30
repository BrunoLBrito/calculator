class Calculator {
  constructor() {}

  /**
   * Converte uma string no formato 'hh:mm:ss' para segundos.
   * @param {string} schedule - O horário no formato 'hh:mm:ss'.
   * @returns {number} - O total de segundos.
   */
  convertToSeconds(schedule) {
    return schedule.split(':').reduce((acc, time) => 60 * acc + Number(time))
  }

  /**
   * Converte o total de segundos em uma string no formato 'hh:mm:ss'.
   * @param {number} secsData - O total de segundos.
   * @returns {string} - O horário no formato 'hh:mm:ss'.
   */
  secondsToSchedule(secsData) {
    let secs = Math.floor(secsData)
    let hours = Math.floor(secs / 3600)
    let minutes = Math.floor((secs % 3600) / 60)
    let seconds = secs % 60

    return [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':')
  }

  /**
   * Subtrai dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.
   * @param {string} first - O primeiro horário.
   * @param {string} second - O segundo horário.
   * @returns {string} - O resultado da subtração no formato 'hh:mm:ss'.
   */
  sub(first, second) {
    const firstSeconds = this.convertToSeconds(first)
    const secondSeconds = this.convertToSeconds(second)
    const diffSeconds = Math.abs(firstSeconds - secondSeconds)

    return this.secondsToSchedule(diffSeconds)
  }

  /**
   * Soma dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.
   * @param {string} first - O primeiro horário.
   * @param {string} second - O segundo horário.
   * @returns {string} - O resultado da soma no formato 'hh:mm:ss'.
   */
  sum(first, second) {
    const firstSeconds = this.convertToSeconds(first)
    const secondSeconds = this.convertToSeconds(second)
    const sumSeconds = Math.abs(firstSeconds + secondSeconds)

    return this.secondsToSchedule(sumSeconds)
  }
}

export { Calculator }
