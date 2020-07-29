<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyOnExtracurricularCoachTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('extracurricular_coach', function (Blueprint $table) {
            $table->foreign('extracurricular_id')->references('id')->on('extracurricular')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('extracurricular_coach', function (Blueprint $table) {
            $table->dropForeign('extracurricular_coach_extracurricular_id_foreign');
        });
    }
}
