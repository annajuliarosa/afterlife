<template>
<div>
  <div v-for="(url, index) in imageUrls" :key="index" style="position: relative; display: inline-block; margin: 10px;">
    <img
      :src="resolveImageUrl(index)"
      height="100"
      width="100"
      v-if="isImage(index) || isFileIcon(index)"
      @click="openDocument(index)"
      style="cursor: pointer;"
    />
    <video v-else-if="isVideo(url)" :src="url" height="150" controls></video>
    <v-icon small @click="removeFile(index)" style="position: absolute; top: -3px; right: -10px; cursor: pointer;">
      mdi-closeit ad
    </v-icon>
    <p>{{ truncateName(imageNames[index]) }}</p>
  </div>
  <v-container>
    <v-row justify="left">
      <v-btn icon @click="pickFile">
        <v-icon>mdi-paperclip</v-icon>
      </v-btn>
      <input
        type="file"
        ref="image"
        accept="image/jpeg, image/jpg, image/png, application/pdf, application/msword, application/vnd.ms-excel, video/mp4, video/avi, video/mpeg, video/quicktime, video/webm, video/x-matroska"
        @change="onFilePicked"
        style="display: none;"
        multiple
      />
    </v-row>
  </v-container>
</div>
    
</template>

<script>
import pdfIcon from '@/assets/imgs/pdficon.png';
import wordIcon from '@/assets/imgs/wordicon.png';
import excelIcon from '@/assets/imgs/excelicon.png';

export default {
  data() {
    return {
      imageUrls: [],
      imageFiles: [],
      imageNames: [],
      pdfIcon: pdfIcon,
      wordIcon: wordIcon,
      excelIcon: excelIcon
    };
  },
  methods: {
    async pickFile() {
      this.$refs.image.click();
    },
    async onFilePicked(e) {
      const files = Array.from(e.target.files);
      for (const file of files) {
        if (this.validateFile(file)) {
          const fr = new FileReader();
          fr.onload = async (event) => {
            let url = event.target.result;
            this.imageUrls.push(url);
            this.imageFiles.push(file);
            this.imageNames.push(file.name);
          };
          fr.readAsDataURL(file);
        }
      }
    },
    removeFile(index) {
      this.imageUrls.splice(index, 1);
      this.imageFiles.splice(index, 1);
      this.imageNames.splice(index, 1);
    },
    isImage(index) {
      const file = this.imageFiles[index];
      return file.type.startsWith('image/');
    },
    isFileIcon(index) {
      const file = this.imageFiles[index];
      return file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.ms-excel';
    },
    openDocument(index) {
      const file = this.imageFiles[index];
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    },
    isVideo(url) {
      return url.startsWith('data:video');
    },
    truncateName(name) {
      return name.length > 20 ? name.substring(0, 17) + '...' : name;
    },
    validateFile(file) {
      const allowedFileTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.ms-excel',
        'video/mp4',
        'video/avi',
        'video/mpeg',
        'video/quicktime',
        'video/webm',
        'video/x-matroska'
      ];
      const maxFileSize = 10 * 1024 * 1024; // Tamanho máximo do arquivo em bytes (10 MB)

      if (!allowedFileTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed.`);
        return false;
      }
      if (file.size > maxFileSize) {
        alert(`File ${file.name} is too large. Maximum allowed size is ${maxFileSize / (1024 * 1024)} MB.`);
        return false;
      }
      return true;
    },
    resolveImageUrl(index) {
      const file = this.imageFiles[index];
      if (file.type === 'application/pdf') {
        return this.pdfIcon;
      } else if (file.type === 'application/msword') {
        return this.wordIcon;
      } else if (file.type === 'application/vnd.ms-excel') {
        return this.excelIcon;
      }
      return this.imageUrls[index];
    }
  }
}
</script>

