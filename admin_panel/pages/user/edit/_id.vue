<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                                </li>
                                <li class="breadcrumb-item" aria-current="page">
                                    <router-link to="/user/user_list">User List</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Edit User</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->

                <!--end row-->
                <div class="row">
                    <div class="col-xl-12 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <center>
                                        <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                                            <div v-for="(allErrors, idx) in errorArray" :key="idx">
                                                <span class="text-danger">{{ allErrors }} </span>
                                            </div>
                                        </div>
                                    </center>

                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                        enctype="multipart/form-data">

                                        <div class="row mb-3">
                                            <label for="inputpassword_confirmation2"
                                                class="col-sm-3 col-form-label">Role</label>
                                            <div class="col-sm-9">

                                                <select name="role_id" v-model="insertdata.role_id"
                                                    class="form-select role_id">
                                                    <option value="" selected>Select</option>
                                                    <option v-for='data in allrole' :value='data.id'>{{ data.name }}
                                                    </option>
                                                </select>
                                                <span class="text-danger" v-if="errors.role_id">{{ errors.role_id[0]
                                                    }}</span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Name</label>
                                            <div class="col-sm-9">
                                                <input type="hidden" class="form-control id" v-model="insertdata.id"
                                                    id="id">
                                                <input type="text" class="form-control name" v-model="insertdata.name"
                                                    id="name" placeholder="Name">
                                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="inputEnterYourName"
                                                class="col-sm-3 col-form-label">Email</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control name" v-model="insertdata.email"
                                                    id="email" placeholder="Email">
                                                <span class="text-danger" v-if="errors.email">{{ errors.email[0]
                                                    }}</span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Phone No</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control phone" v-model="insertdata.phone"
                                                    id="phone" placeholder="Phone No">
                                                <span class="text-danger" v-if="errors.phone">{{ errors.phone[0]
                                                    }}</span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2"
                                                class="col-sm-3 col-form-label">Address</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control address"
                                                    v-model="insertdata.address" id="addres" placeholder="Address">
                                            </div>
                                        </div>




                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <span class="mb-0">Profile Picture</span>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <div id="dataimages" />
                                                <input type="file" ref="file" @change="onFileSelected"
                                                    class="form-control" id="file" name="file" />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <label for="inputpassword_confirmation2"
                                                class="col-sm-3 col-form-label">Status</label>
                                            <div class="col-sm-9">
                                                <select name="status" v-model="insertdata.status" class="form-select">
                                                    <option value="1" selected>Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <label class="col-sm-3 col-form-label"></label>
                                            <div class="col-sm-9">
                                                <button type="submit" class="btn btn-success px-5 w-100"><i
                                                        class="bx bx-check-circle mr-1"></i> Submit</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>

<script>
export default {
    head: {
        title: 'Edit User'
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                phone: '',
                email: '',
                address: '',
                role_id: '',
                status: 1,
            },
            notifmsg: '',
            errors: {},
            allrole: [],
        }
    },
    created() {
        this.getrole();
        this.getData();
    },
    methods: {
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        saveData() {
            const formData = new FormData();
            let role_id = $(".role_id").val();
            formData.append('id', this.insertdata.id);
            formData.append('file', this.file);
            formData.append('role_id', role_id);
            formData.append('name', this.insertdata.name);
            formData.append('email', this.insertdata.email);
            formData.append('phone', this.insertdata.phone);
            formData.append('address', this.insertdata.address);
            formData.append('status', this.insertdata.status);


            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/saveUser',
                formData, {
                headers
            }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/user/user_list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/user/getUserRow/${id}`).then(response => {
                console.log(response.data.data.name)
                this.insertdata.role_id = response.data.data.role_id;
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.phone = response.data.data.phone_number;
                this.insertdata.address = response.data.data.address;
                this.insertdata.email = response.data.data.email;
                this.insertdata.status = response.data.data.status;
                $('#dataimages').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.dataImg + '" />');
            });

        },
        getrole() {
            this.$axios.get('/user/getRoleList').then(response => {
                this.allrole = response.data.data;

            });

        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },

    },
}
</script>