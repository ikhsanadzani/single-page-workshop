# import re

# with open('scripts/workshop-data.js', 'r') as f:
#     content = f.read()

# # We want to add these fields to every workshop object in the array
# # To do this safely, we can replace "image: null\n    }" with:
# # "image: null,\n        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',\n        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],\n        certificate: { available: true, type: 'Certificate of Completion' }\n    }"

# new_str = "image: null,\n        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',\n        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],\n        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }\n    }"

# patched = content.replace("image: null\n    }", new_str)

# with open('scripts/workshop-data.js', 'w') as f:
#     f.write(patched)

# print("Data patched successfully.")
