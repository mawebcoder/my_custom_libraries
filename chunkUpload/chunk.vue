<template>
  <div>
    <drop-zone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"/>
  </div>
</template>

<script>
import dropZone from 'vue2-dropzone'

export default {
  data() {
    return {
      dropzoneOptions: {
        url: 'http://localhost:8000/api/chunk-upload',
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 400,
        duplicateCheck: 'enabled',
        dictUploadCanceled: 'آپلود توسط شما کنسل شد',
        dictCancelUploadConfirmation: 'آیا اطمینان دارید؟',
        acceptedFiles: 'image/*',
        addRemoveLinks: true,

        // renameFile: (file) => {
        //   // console.log(file)
        //   if (this.product_gallery_folder_name.length === 0) {
        //     this.product_gallery_folder_name = HelperCalss.makeRandomString(50);
        //   }
        //
        //   let type = file['type'].split('/')[1];
        //
        //   let random_file_name = HelperCalss.makeRandomString(20);
        //
        //   let full_name = this.product_gallery_folder_name + 'rahatbin' + random_file_name + '.' + type
        //
        //   this.uploaded_files.push(full_name)
        //
        //   return full_name;
        //
        // },
        chunking: true,
        retryChunks: true,
        retryChunksLimit: 3,
        forceChunking: true,
        chunkSize: 102400,
        dictDefaultMessage: 'عکس را بکشید و رها کنید',
        dictFileTooBig: 'سایز فایل نمیتواند بیشتر از ۲ مگابایت باشد',
        dictFallbackMessage: 'مرورگر شما از این نسخه از dropzone  پشتیبانی نمیکند',
        headers: {"My-Awesome-Header": "header value"},
        dictCancelUpload: 'انصراف',
        dictRemoveFile: 'حذف',
      },

    }
  },
  components: {
    dropZone
  },
}
</script>
