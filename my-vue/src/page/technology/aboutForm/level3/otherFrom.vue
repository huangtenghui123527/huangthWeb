<template>
    <div class="box">
        <title>其他信息</title>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="绑定当前手机:" prop="name" :label-width="120">
                <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            <FormItem label="基础短信服务:" prop="gender" :label-width="120">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">网站密码找回</Radio>
                    <Radio label="female">提现短信验证</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="可选短信服务" prop="interest" :label-width="120">
                <CheckboxGroup v-model="formValidate.interest">
                    <Checkbox label="Eat">投标通知</Checkbox><br/>
                    <Checkbox label="Sleep">满标、流标、撤销通知</Checkbox><br/>
                    <Checkbox label="Run">回款通知</Checkbox><br/>
                    <Checkbox label="Movie">优质提醒通知</Checkbox><br/>
                </CheckboxGroup>
            </FormItem>

        </Form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formValidate:{
                name:'',
                gender: '',
                interest: [],

            },
            ruleValidate:{
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],

            }
        }
    }
}
</script>