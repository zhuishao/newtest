<template>
    <a-card title="自行处理表单数据">
        <a-form>
            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="Prime between 8 & 12"
                    :validate-status="number.validateStatus"
                    :help="number.errorMsg || tips"
            >
                <a-input-number
                        :min="8"
                        :max="12"
                        :value="number.value"
                        @change="handleNumberChange"
                />
            </a-form-item>
        </a-form>
    </a-card>
</template>
<script>
    function validatePrimeNumber(number) {
        if (number === 11) {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
        return {
            validateStatus: 'error',
            errorMsg: 'The prime between 8 and 12 is 11!',
        };
    }

    export default {
        data() {
            return {
                labelCol: {span: 7},
                wrapperCol: {span: 12},
                number: {
                    value: 11,
                },
                tips: 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
            };
        },
        methods: {
            handleNumberChange(value) {
                this.number = {
                    ...validatePrimeNumber(value),
                    value,
                };
            },
        },
    };
</script>