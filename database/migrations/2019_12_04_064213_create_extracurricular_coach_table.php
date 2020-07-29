<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtracurricularCoachTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extracurricular_coach', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('extracurricular_id');
            $table->string('nama');
            $table->enum('gender', ['Laki-laki', 'Perempuan']);
            $table->date('dateBorn');
            $table->string('photo');
            $table->string('profile');
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
        Schema::dropIfExists('extracurricular_coach');
    }
}
