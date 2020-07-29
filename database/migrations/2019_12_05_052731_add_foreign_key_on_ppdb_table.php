<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyOnPpdbTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ppdb', function (Blueprint $table) {
            $table->foreign('school_id')->references('id')->on('school');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ppdb', function (Blueprint $table) {
            $table->dropForeign('ppdb_school_id_foreign');
        });
    }
}
