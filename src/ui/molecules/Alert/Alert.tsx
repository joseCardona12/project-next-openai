'use client'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

type AlertType = 'success' | 'error' | 'info' | 'warning';

export default function Alert(message: string, type: AlertType = 'info') {
    return MySwal.fire({
        title: <i>{message}</i>,
        icon: type,
        iconColor: '#fbbf24',
        confirmButtonColor: '#fbbf24',
        confirmButtonText: 'OK'
    });
}