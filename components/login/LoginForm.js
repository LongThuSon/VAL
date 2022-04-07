import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
            .min(6, 'Your password has to have at least 6 characters')
            .required('An password is required')
    })

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={LoginFormSchema}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                    <>
                        <View style={[
                            styles.inputField,
                            {
                                borderColor: 
                                    ((errors.email === 'Invalid email' || errors.email === 'An email is required') && touched.email) ? 'red' : '#ccc',
                            }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            {
                                borderColor:
                                    ((errors.password === 'Your password has to have at least 6 characters' || errors.password === 'An password is required') && touched.email) ? 'red' : '#ccc',
                            }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
                        </View>

                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={() => {
                                handleSubmit()
                                navigation.push('Home')
                            }}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 6,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
})

export default LoginForm