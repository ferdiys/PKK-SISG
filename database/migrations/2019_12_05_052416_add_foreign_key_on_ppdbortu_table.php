<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyOnPpdbortuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ppdbortu', function (Blueprint $table) {
            $table->foreign('ppdbuser_id')->references('id')->on('ppdbuser')->onDelete('cascade');
            $table->foreign('type')->references('id')->on('parent_type')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ppdbortu', function (Blueprint $table) {
            $table->dropForeign('ppdbortu_ppdbuser_id_foreign');
            $table->dropForeign('ppdbortu_type_foreign');
        });
    }
}
