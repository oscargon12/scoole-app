import Swal from 'sweetalert2'

export const validateData = (values) => {

    if (values.nombre.length < 3){
        Swal.fire({
            icon: 'error',
            title: 'Nombre Inválido'
        })
        return false
    }
    
    if (values.apellido.length < 3){
        Swal.fire({
            icon: 'error',
            title: 'Apellido Inválido'
        })
        return false
    }
    
    if (values.email.length < 7){
        Swal.fire({
            icon: 'error',
            title: 'Email Inválido'
        })
        return false
    }
    
    if (values.emailConfirm !== values.email){
        Swal.fire({
            icon: 'error',
            title: 'Email no coincide'
        })
        return false
    }

    return true
    //TODO: Expresion regular para el email
}