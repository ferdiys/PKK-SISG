<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePpdbusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppdbuser', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('ppdb_id');
            $table->string('nama_lengkap');
            $table->string('nisn');
            $table->float('nem');
            $table->string('noijazah');
            $table->enum('kelamin', ['Laki-laki', 'Perempuan']);
            $table->string('tempat_lahir');
            $table->date('tl');
            $table->string('asal_sekolah');
            $table->enum('status', ['Lengkap','Yatim', 'Piatu', 'Yatim Piatu'])->nullable();
            $table->string('saudara_kandung')->nullable();
            $table->string('saudara_tiri')->nullable();
            $table->enum('tinggal', ['Orang Tua', 'Kos/Asrama','Wali']);
            $table->string('jarak');
            $table->enum('transportasi', ['Jalan Kaki', 'Kendaraan Umum', 'Diantar-Jemput', 'Kereta Api', 'Pesawat Terbang', 'Sepeda']);
            $table->string('lama_sd');
            $table->string('alamat');
            $table->string('foto');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ppdbuser');
    }
}
