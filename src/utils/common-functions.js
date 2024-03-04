export const handleErrorMessages = errorData => {
  if (!errorData) return 'Something went wrong.'

  if (errorData?.detail || errorData?.details) {
    return errorData?.detail || errorData?.details
  } else if (errorData?.non_field_errors) {
    return Array.isArray(errorData.non_field_errors) ? errorData.non_field_errors?.[0] : errorData.non_field_errors
  } else {
    let err = {}

    err = errorData.message ?? 'Something went wrong'

    /* Object?.keys(errorData).forEach(key => {
      err = { ...err, [key]: errorData[key][0] ?? errorData[key] ?? 'Something went wrong' };
    }); */

    return err
  }
}
