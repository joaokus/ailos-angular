export const validCpf = (value: string) => {
    
    if (value === '00000000000' || value === '11111111111' ||
        value === '22222222222' || value === '33333333333' ||
        value === '44444444444' || value === '55555555555' ||
        value === '66666666666' || value === '77777777777' ||
        value === '88888888888' || value === '99999999999') {
        return true
    }

    return false

}