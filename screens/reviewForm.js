import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const reviewSchema = Yup.object({
    title: Yup.string()
        .min(4, 'Title must be at least 4 characters')
        .required('Required'),
    body: Yup.string()
        .min(8, 'Body must be at least 8 characters')
        .required('Required'),
    rating: Yup.number()
        .required('Required')
        .min(1, 'Rating must be between 1 and 5')
        .max(5, 'Rating must be between 1 and 5'),
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Review title"
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        {touched.title && errors.title && (
                            <Text style={styles.error}>{errors.title}</Text>
                        )}
                        <TextInput
                            multiline minHeight={60}
                            style={styles.input}
                            placeholder="Review body"
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        {touched.body && errors.body && (
                            <Text style={styles.error}>{errors.body}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            keyboardType="numeric"
                        />
                        {touched.rating && errors.rating && (
                            <Text style={styles.error}>{errors.rating}</Text>
                        )}
                        <Button onPress={handleSubmit} color="maroon" title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 8,
        borderRadius: 4,
    },
    error: {
        fontSize: 12,
        color: 'red',
        marginBottom: 8,
    },
});
