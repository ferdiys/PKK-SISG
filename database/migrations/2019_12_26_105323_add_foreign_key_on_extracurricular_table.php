<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyOnExtracurricularTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('extracurricular', function (Blueprint $table) {
            $table->foreign('school_id')->references('id')->on('school')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('extracurricular', function (Blueprint $table) {
            $table->dropForeign('extracurricular_school_id_foreign');
        });
    }
}
